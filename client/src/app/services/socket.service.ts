import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as socket_io from 'socket.io-client';

@Injectable()
export class SocketService {
  
	//socketDomain = "http://localhost:1995";
  socketDomain = "";
	socket;

  constructor() { 
  }

  sendRequestLogout(username) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-logout', {usernameLogout: username});
  }

  sendRequestCreateUser(username) {
    this.socket = socket_io(this.socketDomain);
  	this.socket.emit('client-login', username);
  }

  sendRequestAddUserOnline(username, photo) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-add-user-online', {username: username, photo: photo});
  }

  sendRequestWriteBlogSuccess(photo, username, titleBlog) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-write-blog-success', {photo: photo, creatorBlog: username, titleBlog: titleBlog});
  }

  sendRequestEditeBlogSuccess(photo, username, oldTitleBlog, newTitleBlog) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-edit-blog-success', {photo: photo, creatorBlog: username, oldTitleBlog: oldTitleBlog, newTitleBlog: newTitleBlog});
  }

  sendRequestDeleteBlogSuccess(photo, username, titleBlog) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-delete-blog-success', {photo: photo, creatorBlog: username, titleBlog: titleBlog});
  }

  sendRequestLikeBlogSuccess(username, photo, titleBlog) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-like-blog-success', {username: username, photo: photo, titleBlog: titleBlog});
  }

  sendRequestDislikeBlogSuccess(username, photo, titleBlog) {
    this.socket = socket_io(this.socketDomain);
    this.socket.emit('client-dislike-blog-success', {username: username, photo: photo, titleBlog: titleBlog});
  }

  getResponseUserLogoutSuccess() {
    let observable = new Observable(observable => {
      this.socket = socket_io(this.socketDomain);
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
      this.socket = socket_io(this.socketDomain);
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
      this.socket = socket_io( this.socketDomain );
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
      this.socket = socket_io( this.socketDomain );
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
      this.socket = socket_io(this.socketDomain);
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
      this.socket = socket_io(this.socketDomain);
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
      this.socket = socket_io(this.socketDomain);
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
