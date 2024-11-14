import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { createMessage, sendChatMessage } from 'src/graphql/mutations';
import { onCreateMessage, onMessageReceived } from 'src/graphql/subscriptions';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  async sendMessage( roomID: string, content: string,) {
    const client = generateClient({ authMode: 'userPool' });
    try {
      const response = await client.graphql({
        query: createMessage,
        variables: {
          input: {
            roomID,
            content,
            playerID: 'currentPlayerId', // You'll want to get this from your auth context
            playerName: 'Player Name',    // You'll want to get this from your auth context
                 // Assuming you have a MessageType enum
          }
        }
      });
      console.log('Message sent:', response);
      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  subscribeToMessages(roomID: string) {
    const client = generateClient({ authMode: 'userPool' });
    return client.graphql({
      query: onCreateMessage,
      // variables: {
      //   filter: {
      //     roomID: { eq: roomID }
      //   }
      // }
    }).subscribe({
      next: ({ data }) => {
        console.log('New message received:', data.onCreateMessage);
        // Handle the new message here
      },
      error: (error) => {
        console.error('Subscription error:', error);
      }
    });
  }

  ///  TODO 

  async sendChatMessage( roomId: string, message: string,) {
    // Implement this method
    const client = generateClient({ authMode: 'userPool' })
    let res;

    try {
      res = await client.graphql({
        query: sendChatMessage,
        variables: {
          message,
          roomId,
          sender: 'user'

        }
      })
      console.log('message sent', res);
    } catch (error) {
      console.log(error);
    }

  }

  subscribeToChatMessages(roomId: string) {
    const client = generateClient({ authMode: 'userPool' })
    return client.graphql({
      query: onMessageReceived,
      variables: {
        roomId,
      }
    }).subscribe({
      next: ({ data }) => {
        console.log('message received', data);
      },
      error: (error) => {
        console.log(error);
      }
    })

  }
}
