import { Component, Host, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
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
export class ChatRoomComponent  implements OnInit, OnChanges, OnDestroy {


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

  ngOnChanges() {
    if(this.id !== ''){
      this.subscription.unsubscribe();
    this.subscribeToChat(this.id)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async sendChat() {
    this.loading = true;
    if(this.message.value){
      console.log('id, message, name, color', this.id, this.message.value, this.user.name, this.user.color);
    await this.chatService.sendChat(this.id, this.message.value, this.user.name, this.user.color);
    this.message.setValue('');
  }
    this.loading = false;
  }

 async getUser() {
    this.user =await this.userService.user.getValue();
    if(!this.user) {
     this.user = await this.userService.getUser();
     console.log(this.user);
    }
  }

  subscribeToChat(id: string) {
    console.log('subscribing to chat', id);
    this.subscription = this.chatService.subscribeToChat(id)
    .subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
    
  }

  updateMessages(message: any) {
    this.chatMessageList.push(message);
    if(this.chatMessageList.length > 20) {
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
