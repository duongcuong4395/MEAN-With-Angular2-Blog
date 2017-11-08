import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

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

	currentUrl;
	

  constructor(
  	private formBuilder: FormBuilder, 
	public authService: AuthService, 
	private activatedRoute: ActivatedRoute,
	private router: Router
  ) { 
  	//create Angular 2 form when component loads
	this.createForm(); 
  }

  //function create register user form
	createForm(){
		this.form = this.formBuilder.group({
			password: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(30),
				this.validatePassword
			])],
			confirm: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(30),
				this.validatePassword
			])]
		}, {
			//validate copare password and comfirm password
			validator: this.matchingPasswords('password', 'confirm')
		})
	}
	disableForm() {
		this.form.controls['password'].disable();
		this.form.controls['confirm'].disable();
	}

	enableForm(){
		this.form.controls['password'].enable();
		this.form.controls['confirm'].enable();
	}

	validatePassword(controls) {
		const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
		if(regExp.test(controls.value)) {
			return null;
		} else {
			return {'validatePassword': true};
		}
	}

  matchingPasswords(password, confirm){
		return (group: FormGroup) => {
			if(group.controls[password].value === group.controls[confirm].value){
				return null;
			}else{
				return {'matchingPasswords': true};
			}
		};
	}

	//function to submit form register user
	onChangePasswordSubmit(){
		this.processing = true;
		this.disableForm();
		const user = {
			password: this.form.get('password').value
		}

		this.currentUrl = this.activatedRoute.snapshot.params;

		//data: json (exp: res.json({ success: true, message: 'User saved!'}) from authenticationjs (server))
		this.authService.changePasswordUser(this.currentUrl.username, this.currentUrl.email, user).subscribe(data => {
			//console.log(data); //show data on console(F12) window web
			if(!data.success){
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
				this.processing = false;
				this.enableForm();
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
				setTimeout(() => {
					this.router.navigate(['/login']);
				}, 2000);
			}
		});
		console.log(this.form)
	}


  ngOnInit() {
  }



}
