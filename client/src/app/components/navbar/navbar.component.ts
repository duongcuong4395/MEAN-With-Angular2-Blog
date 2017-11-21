import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import * as socket_io from 'socket.io-client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username;
  email;
  image;
  name;

  socket;

  constructor(
  	public authService: AuthService,
  	private router: Router,
  	private flashMessagesService: FlashMessagesService
  ) { }

  onLogoutClick(){
  	this.authService.logout();
  	//angular2-flash-message is intended to be used for displaying flash-messages on UI. The flash message can be 
  	//customized based on the message type (alert, info, warning) which is based on Bootstrap 3 Alerts
  	this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' });
  	this.router.navigate(['/'])
  }

  ngOnInit() {
    if(this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.image = profile.user.userAuthorization.photo;
        this.username = profile.user.userAuthorization.username;
        this.name = profile.user.userAuthorization.name;
      });
    } else {
        this.username = 'sdfsdf';
      this.email = '';
      this.image = '';
    }

    //listen socket
    this.socket = socket_io("http://localhost:9697");
  }
}
