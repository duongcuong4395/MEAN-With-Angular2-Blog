import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { SocketService } from '../../services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(
  	private authService : AuthService,
    public socketService: SocketService,
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

        this.authService.updateHistoryLogin(this.username).subscribe(data => {
          //dosomething
        });

        //store user's token in client local storage
        this.authService.storeUserData(data.token, data.user);
        this.socketService.sendRequestCreateUser(this.username);
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
        this.username = data.user.userAuthorization.username;
      }
    });
  }

}
