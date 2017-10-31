import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	//bootstrap class
	messageClass; 
	//message show if action err or success
	message; 
	processing = false;
	
	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
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

	onLoginSubmit(){
		this.processing = true;
		this.disableForm();
		//get info user input
		const user = {
			username: this.form.get('username').value,
			password: this.form.get('password').value
		}
		this.authService.login(user).subscribe(data => {
			if(!data.success){
				this.messageClass = 'alert alert-danger'; 
				this.message = data.message;
				this.processing = false;
				this.enableForm();
			} else {
				this.messageClass = 'alert alert-success'; 
				this.message = data.message;
				this.authService.storeUserData(data.token, data.user);
				setTimeout(() => {
					this.router.navigate(['/dashboard']);
				}, 2000);
				//this.processing = true;
				//this.disableForm();
			}
		});
	}

	ngOnInit() {
	}

}
