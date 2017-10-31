import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	messageClass;
	message;
	newPost = false;
	loadingBlogs = false;

	form;
	processing = false;
	username;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private blogService: BlogService
	) { 
		this.createNewBlogForm();
	}

	//function create register user form
	createNewBlogForm(){
		this.form = this.formBuilder.group({
			title: ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				Validators.minLength(5),
				this.alphaNumericValidation
			])],
			body: ['',  Validators.compose([
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(500)
			])]
		})
	}

	disableNewBlogForm() {
		//this.form.get('title').disable();
		//this.form.get('body').disable();
		this.form.controls['title'].disable();
		this.form.controls['body'].disable();
	}

	enableNewBlogForm(){
		this.form.controls['title'].enable();
		this.form.controls['body'].enable();
	}

	onBlogSubmit() {
		this.processing = true;
		this.disableNewBlogForm();
		const blog = {
			title: this.form.get('title').value,
			body: this.form.get('body').value,
			createdBy: this.username
		}

		this.blogService.newBlog(blog).subscribe(data => {
			if(!data.success){
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
				this.processing = false;
				this.enableNewBlogForm();
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
				setTimeout(()=>{
					this.newPost = false;
					this.processing = false
					this.message = false;
					this.form.reset();
					this.enableNewBlogForm();
				}, 2000);
			}
		});
	}

	alphaNumericValidation(controls){
		 const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
		 if(regExp.test(controls.value)){
		 	return null;
		 } else {
		 	return {'alphaNumericValidation': true};
		 }
	}

	newBlogForm(){
		this.newPost = true;
	}

	reloadBlogs(){
		this.loadingBlogs = true;
		//Get all blogs
		setTimeout(() => {
			this.loadingBlogs = false;
		}, 2000);
	}

	draftComment(){
	//fd
	}

	goBack(){
		window.location.reload();
	}

	ngOnInit() {
		this.authService.getProfile().subscribe(profile => {
			this.username = profile.user.username;
		});
	}

}
