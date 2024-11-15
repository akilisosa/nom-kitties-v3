import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;


  @Input() id: string = '';
  user: any = {};

  loading = false;
  subscription = new Subscription()
  message = new FormControl('')
  chatMessageList: any[] = [];

  constructor(private chatService: ChatService, private userService: UserService,) { }

  // listen to enter input
  @HostListener('document:keydown.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (input.value && this.user.name) {
      this.sendChat()
    }
  }

  ngOnInit() {
    this.getUser()
  }

  ngAfterViewInit() {
    // Initial scroll to bottom
  }

  ngOnChanges() {
    console.log('changes', this.id);
    if (this.id !== '') {
      this.subscription.unsubscribe();
      this.getLastMessages(this.id);
      this.subscribeToChat(this.id)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async sendChat() {
    this.loading = true;
    if (this.message.value) {
      await this.chatService.sendChat(this.id, this.message.value, this.user.color, this.user.name,);
      this.message.setValue('');
     // this.scrollToBottom();
    }
    this.loading = false;
  }

  async getLastMessages(id: string) {
    const messages = await this.chatService.getLastMessages(id) || [];
    this.chatMessageList = [...messages];

  }

  async getUser() {
    this.user = await this.userService.user.getValue();
    if (!this.user) {
      this.user = await this.userService.getUser();

    }
  }


  subscribeToChat(id: string) {
    this.subscription = this.chatService.subscribeToChat(id)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.updateMessageList(data.data.onCreateMessage)
        },
        error: (error: any) => {
          console.error(error);
        },
      });
  }

  updateMessageList(message: any) {
    this.chatMessageList.push(message);
    if (this.chatMessageList.length > 20) {
      this.chatMessageList.shift();
    }
    setTimeout(() => {
      const lastMessage = this.chatContainer.nativeElement.lastElementChild;
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  
}
