import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';

import { AuthGuard } from '../../guards/auth.guard';

import * as socket_io from 'socket.io-client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	
  usernameValid;
  usernameMessage;

  userAuthorizationWithBlogCreate = false;
  userAuthorizationWithBlogEdit = false;
  userAuthorizationWithBlogDelete = false;
	
  username;
  name;
  email;
  image;

  form;
  messageClass; 
  //message show if action err or success
  message; 
  processing = false;

  previousUrl;

  socket;
  
  constructor(
    private formBuilder: FormBuilder, 
    public authService: AuthService, 
    private router: Router,
    private http: Http,
    private authGuard: AuthGuard
  ) { 
    this.createForm(); 
  }

 //function create register user form
  createForm(){
    this.form = this.formBuilder.group({
      username: ['',  Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        this.validateUsername
      ])]
    })
  }

  disableForm() {
    this.form.controls['username'].disable();
  }

  enableForm(){
    this.form.controls['username'].enable();
  }

  validateUsername(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if(regExp.test(controls.value)) {
      return null;
    } else {
      return {'validateUsername': true};
    }
  }

  checkUsername(){
    this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
      if(!data.success){
        this.usernameValid = false;
        this.usernameMessage = data.message;
      } else {
        this.usernameValid = true;
        this.usernameMessage = data.message;
      }
    });
  }

  valuechange(valuekey){
    if(valuekey == '') {
      this.processing = true;
    } else {
      this.processing = false;
    }
  }

  //client click button submit createUsename
  onCreateUsernameSubmit () {
    this.processing = true;
    this.disableForm();
    this.username = this.form.get('username').value;
    const user = {
      username: this.username
    }

    //call createUsername method from authService(servives/auth.service)
    this.authService.createUsername(user).subscribe(data => {
      //data - from server(node js) response 
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.enableForm();
      } else {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.disableForm();
        //after 2 second router change to router.navigate([name route]);
        setTimeout(() => {
          this.socket.emit("client-login", this.username);
          if(this.previousUrl){
            this.router.navigate([this.previousUrl]);
          } else {
            this.router.navigate(['/blog']);
          }
        }, 2000);
      }
    });
  }

  ngOnInit() {
  	this.authService.getProfile().subscribe(profile => {

      this.email = profile.user.userAuthorization.email;
      this.image = profile.user.userAuthorization.photo;
      this.username = profile.user.userAuthorization.username;
      this.name = profile.user.userAuthorization.name;


      this.userAuthorizationWithBlogCreate = profile.user.userAuthorization.authWithBlog.create;
      this.userAuthorizationWithBlogEdit = profile.user.userAuthorization.authWithBlog.create;
      this.userAuthorizationWithBlogDelete = profile.user.userAuthorization.authWithBlog.create;
  	});

    //check auth redirect
    if(this.authGuard.redirectUrl){
      this.messageClass = 'alert alert-danger';
      this.message = 'You must be to login page';
      this.previousUrl = this.authGuard.redirectUrl;
      this.authGuard.redirectUrl = undefined;
    }

    //listen socket
    this.socket = socket_io("http://localhost:9697");

  }

}
