import { Injectable } from '@angular/core';
import { events } from 'aws-amplify/data';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor() { }

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
