import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as socket_io from 'socket.io-client';

@Injectable()
export class SocketService {
  
	//socketDomain = "http://localhost:3000";
  //socketDomain = "https://duongcuongblog.herokuapp.com";
  socketDomain = "";
	socket;

  constructor() { 
  this.socket = socket_io(this.socketDomain);
  }

  sendRequestChatWithUser(userChat) {
    this.socket.emit('client-chat-with-user', {usernameChat: userChat});
  }

  sendRequestLogout(username) {
    this.socket.emit('client-logout', {usernameLogout: username});
  }

  sendRequestCreateUser(username) {
  	this.socket.emit('client-login', username);
  }

  sendRequestAddUserOnline(username, photo) {
    this.socket.emit('client-add-user-online', {username: username, photo: photo});
  }

  sendRequestWriteBlogSuccess(photo, username, titleBlog) {
    this.socket.emit('client-write-blog-success', {photo: photo, creatorBlog: username, titleBlog: titleBlog});
  }

  sendRequestEditeBlogSuccess(photo, username, oldTitleBlog, newTitleBlog) {
    this.socket.emit('client-edit-blog-success', {photo: photo, creatorBlog: username, oldTitleBlog: oldTitleBlog, newTitleBlog: newTitleBlog});
  }

  sendRequestDeleteBlogSuccess(photo, username, titleBlog) {
    this.socket.emit('client-delete-blog-success', {photo: photo, creatorBlog: username, titleBlog: titleBlog});
  }

  sendRequestLikeBlogSuccess(username, photo, titleBlog) {
    this.socket.emit('client-like-blog-success', {username: username, photo: photo, titleBlog: titleBlog});
  }

  sendRequestDislikeBlogSuccess(username, photo, titleBlog) {
    this.socket.emit('client-dislike-blog-success', {username: username, photo: photo, titleBlog: titleBlog});
  }

   sendRequestSendMessage(photo, username, message, icon, numberIcon) {
    this.socket.emit('client-send-message', {photo: photo, username: username, message: message, icon: icon, numberIcon: numberIcon});
  }

  sendRequestCallUserChat(username, userSendRequest) {
      this.socket.emit('client-send-call-user-Chat', {username: username, userSendRequest: userSendRequest});
  }

  sendRequestUserComment(photo, username, comment, titleBlog) {
    this.socket.emit('client-send-comment-blog', {photo: photo, username: username, comment: comment, titleBlog: titleBlog});
  }

  sendRequestloadAll(){
    this.socket.emit('client-send-load-all');
  }

  getResponseCallUserChat() {
    //server-send-call-user-chat
    let observable = new Observable(observable => {
      this.socket.on('server-send-call-user-chat', (dataServerSend) => {
        observable.next(dataServerSend);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getResponseMessage() {
    let observable = new Observable(observable => {
      this.socket.on('server-send-message', (dataServerSend) => {
        observable.next(dataServerSend);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getResponseUserLogoutSuccess() {
    let observable = new Observable(observable => {
      this.socket.on('client-logout-success', (dataServerSend) => {
        observable.next(dataServerSend.usersLoggedIn);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getResponseWriteBlogSuccess() {
    let observable = new Observable( observable => {
      this.socket.on( 'server-response-client-write-blog-success', (dataServerSend) => {
        observable.next(dataServerSend);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
  
  getResponseEditeBlogSuccess() {
     let observable = new Observable( observable => {
      this.socket.on( 'server-response-client-edit-blog-success', (dataServerSend) => {
        observable.next(dataServerSend);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getResponseDeleteBlogSuccess() {
     let observable = new Observable( observable => {
      this.socket.on( 'server-response-client-delete-blog-success', (dataServerSend) => {
        observable.next(dataServerSend);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getResponseUsersOnline() {
    let observable = new Observable(observable => {
      this.socket.on('server-send-users-online', (dataServerSend) => {
        observable.next(dataServerSend.usersOnline);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  } 

  getResponseUsername() {
    let observable = new Observable(observable => {
      this.socket.on('server-send-username', (dataServerSend) => {
        observable.next(dataServerSend);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getResponseAllactive() {
    let observable = new Observable(observable => {
      this.socket.on('server-send-all-active', (dataServerSend) => {
        observable.next(dataServerSend.allActive);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
