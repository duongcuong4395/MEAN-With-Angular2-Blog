import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as socket_io from 'socket.io-client';

@Component({
  selector: 'app-checkauthlogin',
  templateUrl: './checkauthlogin.component.html',
  styleUrls: ['./checkauthlogin.component.css']
})
export class CheckauthloginComponent implements OnInit {

	currentUrl
	url;
	authLoginName;
	name;
  photo;
  username;

	idUser;
  previousUrl;

  messageClass;
  message;

  socket;

  constructor(
  	private authService : AuthService,
  	private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  loginWithAuth() {
    this.authService.socialLogin(this.authLoginName,this.name,this.idUser).subscribe(data => {
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        //store user's token in client local storage
        this.authService.storeUserData(data.token, data.user);
        //load dashboard page after 2 seccond
        setTimeout(() => {
          if(this.previousUrl){
            this.router.navigate([this.previousUrl]);
          } else {
            this.router.navigate(['/dashboard']);
          } 
        }, 2000);
      }
    });
  }

  logoutWithAuth() {
    this.authService.logout();
    window.location.href='/logout';
  }

  ngOnInit() {
  	this.currentUrl = this.activatedRoute.snapshot.params;
  	this.idUser = this.currentUrl.idUser;

    this.authService.getProfileWithID(this.idUser).subscribe(data => {
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.photo = data.user.userAuthorization.photo;
        this.name = data.user.userAuthorization.name;
        this.authLoginName = data.user.userAuthorization.authorizationType;
        //check user login by social have username?
        if(data.user.userAuthorization.username) {
          this.username = data.user.userAuthorization.username;
          //listen socket
          this.socket = socket_io("http://localhost:9697");
          this.socket.emit("client-login", this.username);
        }
      }
    });
  }

}
