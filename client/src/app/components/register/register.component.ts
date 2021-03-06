import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

	nameValid;
	nameMessage;

	filesToUpload: Array<File> = [];
	numfilechoose = 0;
	imagevalid;
	imagechooen = false;
	imageName;


	constructor( 
		private formBuilder: FormBuilder, 
		public authService: AuthService, 
		private router: Router,
		private http: Http
	) { 
		//create Angular 2 form when component loads
		this.createForm(); 
	}

	//function create register user form
	createForm(){
		this.form = this.formBuilder.group({
			name : ['', Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(50),
				//custom validation
				this.validateName
			])],
			email: ['', Validators.compose([
				//validate require
				Validators.required,
				//max and min length character
				Validators.minLength(5),
				Validators.maxLength(100),
				//custom validation
				this.validateEmail 
			])],
			username: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(15),
				this.validateUsername
			])],
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
		this.form.controls['email'].disable();
		this.form.controls['username'].disable();
		this.form.controls['password'].disable();
		this.form.controls['confirm'].disable();
	}

	enableForm(){
		this.form.controls['email'].enable();
		this.form.controls['username'].enable();
		this.form.controls['password'].enable();
		this.form.controls['confirm'].enable();
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
	validateName(controls) {
		const regExp = new RegExp(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/);
		if(regExp.test(controls.value)) {
			return null;
		} else {
			return {'validateName': true};
		}
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
	onRegisterSubmit(){
		this.processing = true;
		this.disableForm();

		const formData: any = new FormData();
		const files: Array<File> = this.filesToUpload;
		for(let i =0; i < files.length; i++){
		    formData.append("uploads[]", files[i], files[i]['name']);
		}

		const user = {
			email: this.form.get('email').value,
			username: this.form.get('username').value,
			name: this.form.get('name').value,
			password: this.form.get('password').value,
			image: this.imageName
		}

		this.authService.uploadFile(formData).subscribe(data => {
			if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message + data.image;
				this.imagechooen = false;
			} else {
				this.authService.registerUser(user).subscribe(data => {
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
			}
		});

		/*
	    this.http.post('/upload',formData).map(res => res.json()).subscribe(data => {
	    	if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
				this.imagechooen = false;
			} else {
				this.messageClass = 'alert alert-success';
				this.imageName = data.namefile;
				this.message = 'Server have gotten flie:' + this.imageName;
				this.imagechooen = true;
			}
	    });


		//data: json (exp: res.json({ success: true, message: 'User saved!'}) from authenticationjs (server))
		this.authService.registerUser(user).subscribe(data => {
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
		*/
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

	checkEmail(){
		this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
			if(!data.success){
				this.emailValid = false;
				this.emailMessage = data.message;
			} else {
				this.emailValid = true;
				this.emailMessage = data.message;
			}
		});
	}

	checkSelectFile() {
		if(this.numfilechoose > 0) {
			this.imagevalid = true;
		} else {
			this.imagevalid = false;
		}
	}


	//upload file
	/*
	upload() {
		const formData: any = new FormData();
		const files: Array<File> = this.filesToUpload;

		for(let i =0; i < files.length; i++){
		    formData.append("uploads[]", files[i], files[i]['name']);
		}
	    this.http.post('http://localhost:3000/upload',formData).map(res => res.json()).subscribe(data => {
	    	if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
				this.imagechooen = false;
			} else {
				this.messageClass = 'alert alert-success';
				this.imageName = data.namefile;
				this.message = 'Server have gotten flie:' + this.imageName;
				this.imagechooen = true;
			}
	    });
	}*/

	fileChangeEvent(fileInput: any) {
	    this.filesToUpload = <Array<File>>fileInput.target.files;
	    const filechoose: Array<File> = this.filesToUpload;

	    this.numfilechoose = filechoose.length;
	    const file = fileInput.target.files[0];

	    if(this.numfilechoose > 0) {
	    	this.imagevalid = true;
	    	this.imagechooen = true;
	    	
    		this.imageName = file.name;
	    } else {
	    	this.imagechooen = false;
	    	this.imagevalid = false;
	    }

	    //this.product.photo = fileInput.target.files[0]['name'];
	}

	ngOnInit() {
	}

}
