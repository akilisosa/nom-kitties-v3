import { AfterViewChecked, Component, ElementRef, Host, HostListener, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Subscription } from 'rxjs';

import { Amplify } from 'aws-amplify';
import { UserService } from '../../services/user.service';
import { FormControl } from '@angular/forms';
// import awsconfig from '../../../../aws-exports';



// Amplify.configure({
//   ...awsconfig,
//   // "API": {
//   //   "Events": {
//   //     "endpoint": "https://hjzp2ynwl5ehvjn4lihvnesplm.appsync-api.us-east-1.amazonaws.com/event",
//   //     "region": "us-east-1",
//   //     "defaultAuthMode": "apiKey",
//   //     "apiKey": "da2-bmfwwzhplnb4bg3vdkik62u3ba"
//   //   }
//   // }
// });


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit, OnChanges, AfterViewChecked, OnDestroy {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  private shouldScroll = true;


  @Input() id: string = '';
  user: any = {};

  loading = false;
  subscription = new Subscription()

  message = new FormControl('')


  chatMessageList: any[] = [];

  constructor(private chatService: ChatService, private userService: UserService) { }


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

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
    }
  }

  ngOnChanges() {
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
    }
    this.loading = false;
  }

  async getLastMessages(id: string) {
    const messages = await this.chatService.getLastMessages(id) || [];
    this.chatMessageList = [...messages];
    this.scrollToBottom();
  }

  async getUser() {
    this.user = await this.userService.user.getValue();
    if (!this.user) {
      this.user = await this.userService.getUser();
      console.log(this.user);
    }
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  // Add this method to handle manual scrolling
  onScroll(): void {
    const element = this.chatContainer.nativeElement;
    const atBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 1;
    this.shouldScroll = atBottom;
  }

  subscribeToChat(id: string) {
    console.log('subscribing to chat', id);
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
  }

  //   async sendMessage(id: string, message: string) {
  //     const channel = await events.post(`/gameroom/${id}`, message);
  //   }

  //   async subscribeToChat(id: string) {
  //     const channel = await events.connect(`/gameroom/${id}`);
  //     return channel.subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.error(error);
  //       },
  //   })
  // }
}
