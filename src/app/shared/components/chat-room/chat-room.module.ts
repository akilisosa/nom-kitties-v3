import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room.component';



@NgModule({
  declarations: [ChatRoomComponent],
  imports: [
    CommonModule
  ],
  exports: [ChatRoomComponent]
})
export class ChatRoomModule { }