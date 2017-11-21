import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

	currentUrl;
	user;
	username;
  name;
	email;
  image;
	foundProfile = false;
	message;
	messageClass;


  constructor( private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.currentUrl = this.activatedRoute.snapshot.params;
  	this.authService.getPublicProfile(this.currentUrl.username).subscribe(data => {
  		if(!data.success){
  			this.messageClass = 'alert alert-danger';
  			this.message = data.message;
  			this.foundProfile = false;
  		} else {
  			this.foundProfile = true;
  			
        this.email = data.user.userAuthorization.email;
        this.image = data.user.userAuthorization.photo;
        this.username = data.user.userAuthorization.username;
        this.name = data.user.userAuthorization.name;
  		}
  	});

  }

}
