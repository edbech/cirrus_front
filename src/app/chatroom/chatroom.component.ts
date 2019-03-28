import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor() { }
stompClient=null;
setConnected=null;
  ngOnInit() {
    this.connect();
  }

  sendMessage() {
    this.stompClient.send("/app/game", {}, JSON.stringify("message"); //this.msg)) // get value from message button
  }

  showMessage(message: String) {
    this.table.append("<tr><td>" + message + "</td></tr>");
  }

  connect() {
    var socket = new SockJS('/cirrus-websocket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
      this.setConnected(true);
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/messages', function (message) {
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
