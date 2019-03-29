import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

export function mySocketFactory() {
  return new SockJS('http://127.0.0.1:15674/stomp');
}

@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor() { }
stompClient=null;
msg : String = "x";
setConnected=null;
  ngOnInit() {
    this.connect();
  }

  
  sendMessage() {
    this.stompClient.send("/app/message", {}, JSON.stringify("message")); //this.msg)) // get value from message button
  }

  showMessage(message: String) {
    
    // this.table.append("<tr><td>" + message + "</td></tr>");
    this.msg = message;
  }

  connect() {
    let socket = new SockJS('/cirrus-websocket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
      this.setConnected(true);
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/messages', (message) => {
      this.showMessage(JSON.parse(message.body).content);
      });
    });
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
  }
  this.setConnected(false);
  console.log("Disconnected");
  }
}
