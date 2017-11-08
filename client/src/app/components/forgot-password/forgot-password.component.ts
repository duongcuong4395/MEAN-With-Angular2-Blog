import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

	//form: FormGroup;
	form;
	//bootstrap class
	messageClass; 
	//message show if action err or success
	message; 
	processing = false;

	emailValid;
	emailMessage;

	usernameValid;
	usernameMessage;

	constructor(
		private formBuilder: FormBuilder, 
		public authService: AuthService, 
		private router: Router 
	) { 
		this.createForm();
	}

	//function create register user form
	createForm(){
		this.form = this.formBuilder.group({
			email: ['', Validators.compose([
				//validate require
				Validators.required,
				//max and min length character
				Validators.minLength(5),
				Validators.maxLength(30),
				//custom validation
				this.validateEmail 
			])],
			username: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(15),
				this.validateUsername
			])]
		})
	}

	disableForm() {
		this.form.controls['email'].disable();
		this.form.controls['username'].disable();
	}

	enableForm(){
		this.form.controls['email'].enable();
		this.form.controls['username'].enable();
	}

	validateEmail(controls) {
		const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if(regExp.test(controls.value)) {
			return null;
		} else {
			return {'validateEmail': true};
		}
	}

	validateUsername(controls) {
		const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
		if(regExp.test(controls.value)) {
			return null;
		} else {
			return {'validateUsername': true};
		}
	}

	onForgotPasswordSubmit() {
		this.processing = true;
		this.disableForm();
		const user = {
			email: this.form.get('email').value,
			username: this.form.get('username').value
		}

		this.authService.forgotpasswordUser(user).subscribe(data => {
			//console.log(data); //show data on console(F12) window web
			if(!data.success){
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
				this.processing = false;
				this.enableForm();
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
			}
		});
		console.log(this.form)
	}

  ngOnInit() {
  }

}
