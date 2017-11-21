import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

import * as socket_io from 'socket.io-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	//form: FormGroup;
	form;
	//bootstrap class
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
		private authGuard: AuthGuard
	) { 
		//create Angular 2 form when component loads
		this.createForm(); 
	}

	//function create register user form
	createForm(){
		this.form = this.formBuilder.group({
			username: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(15)
			])],
			password: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(30)
			])]
		})
	}

	disableForm() {
		this.form.controls['username'].disable();
		this.form.controls['password'].disable();
	}

	enableForm(){
		this.form.controls['username'].enable();
		this.form.controls['password'].enable();
	}

	loginfacebook() {

		window.location.href='/auth/facebook';
		/*
		this.authService.loginfacebook().subscribe(data => {
			if(data.succsess) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
			}
		});
		*/
	}

	onLoginSubmit(){
		this.processing = true;
		this.disableForm();
		//get info user input
		const user = {
			username: this.form.get('username').value,
			password: this.form.get('password').value
		}
		//send login data to api
		this.authService.login(user).subscribe(data => {
			//check if response was success or error
			if(!data.success){
				this.messageClass = 'alert alert-danger'; 
				//show error message
				this.message = data.message;
				//enable submit button
				this.processing = false;
				//enable form for edit
				this.enableForm();
			} else {
				this.messageClass = 'alert alert-success'; 
				this.message = data.message;
				//store user's token in client local storage
				this.authService.storeUserData(data.token, data.user);
				//load dashboard page after 2 seccond
				setTimeout(() => {
					this.socket.emit("client-login", this.form.get('username').value);
					if(this.previousUrl){
						this.router.navigate([this.previousUrl]);
					} else {
						this.router.navigate(['/dashboard']);
					} 
				}, 2000);
				//this.processing = true;
				//this.disableForm();
			}
		});
	}

	ngOnInit() {
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
