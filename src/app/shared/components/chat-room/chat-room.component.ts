import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Subscription } from 'rxjs';
import { events } from 'aws-amplify/data';

import { Amplify } from 'aws-amplify';
import awsconfig from '../../../../aws-exports';



// Amplify.configure({
//   ...awsconfig,
//   "API": {
//     "Events": {
//       "endpoint": "https://hjzp2ynwl5ehvjn4lihvnesplm.appsync-api.us-east-1.amazonaws.com/event",
//       "region": "us-east-1",
//       "defaultAuthMode": "apiKey",
//       "apiKey": "da2-bmfwwzhplnb4bg3vdkik62u3ba"
//     }
//   }
// });


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent  implements OnInit {


  id: string = '1234';

  subscription = new Subscription()
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    //this.subscribeToChat(id);
    this.subscribeToChat(this.id);
  }

  async sendMessage(id: string, message: string) {
    const channel = await events.post(`/gameroom/${id}`, message);
  }

  async subscribeToChat(id: string) {
    const channel = await events.connect(`/gameroom/${id}`);
    return channel.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
  })
}
}
