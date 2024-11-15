import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room.component';
import { ChatService } from './services/chat.service';



@NgModule({
  declarations: [ChatRoomComponent],
  providers: [ChatService],
  imports: [
    CommonModule
  ],
  exports: [ChatRoomComponent]
})
export class ChatRoomModule { }
