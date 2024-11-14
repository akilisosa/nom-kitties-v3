import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-feline-forum',
  templateUrl: './feline-forum.page.html',
  styleUrls: ['./feline-forum.page.scss'],
})
export class FelineForumPage implements OnInit {

  subscription: Subscription = new Subscription();  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscribeToMessages();
  }

  sendMessage() {
    this.messageService.sendChatMessage('123', 'Hello World');
  }

  subscribeToMessages() {
     this.subscription.add(this.messageService.subscribeToChatMessages('123'))

   }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }



}
