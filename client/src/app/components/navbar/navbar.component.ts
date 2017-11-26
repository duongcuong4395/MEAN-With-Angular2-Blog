import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SocketService } from '../../services/socket.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  socketConnection;

  constructor(
  	public authService: AuthService,
    private socketService: SocketService,
  	private router: Router,
  	private flashMessagesService: FlashMessagesService
  ) { }

  onLogoutClick(){
    this.socketService.sendRequestLogout(this.username);
       this.authService.logout();
      //angular2-flash-message is intended to be used for displaying flash-messages on UI. The flash message can be 
      //customized based on the message type (alert, info, warning) which is based on Bootstrap 3 Alerts
      this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' });
      this.router.navigate(['/']);
  }

  ngOnInit() {
    //User has been edited blog
    this.socketConnection = this.socketService.getResponseUsername().subscribe(data => {
      this.username = data;
    });

    /*
    this.authService.getProfile().subscribe(profile => {
      this.email = profile.user.userAuthorization.email;
      this.username = profile.user.userAuthorization.username;
      this.name = profile.user.userAuthorization.name;
    });
    */
  }
}
