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
	commentForm;

	processing = false;
	username;
	avatarPost;
	blogPosts;
	imagheUserPosts;

	newComment = [];
	enabledComments = [];

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private blogService: BlogService
	) { 
		this.createNewBlogForm();
		this.createCommentForm();
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
			createdBy: this.username,
			avatarPost: this.avatarPost
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
				this.getAllBlogs();
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
		this.getAllBlogs();
		setTimeout(() => {
			this.loadingBlogs = false;
		}, 2000);
	}

	

	goBack(){
		window.location.reload();
	}

	getAllBlogs() {
		this.blogService.getAllBlogs().subscribe(data => {
			if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else{
				this.blogPosts = data.blogs;
			}
		});
	}

	likeBlog(id) {
		this.blogService.likeBlog(id).subscribe(data => {
			
			this.getAllBlogs();
		});
	}

	dislikeBlog(id) {
		this.blogService.dislikeBlog(id).subscribe(data => {
		
			this.getAllBlogs();
		});
	}

	createCommentForm() {
		this.commentForm = this.formBuilder.group({
			comment: ['', Validators.compose([
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(200)
			])]
		});
	}

	draftComment(id) {
		this.commentForm.reset();
		this.newComment = [];
		this.newComment.push(id);
	}

	postComment(id) {
		this.disableCommentForm();
		this.processing = true;
		const comment = this.commentForm.get('comment').value;
		this.blogService.postComment(id, comment).subscribe(data =>{
			//this.messageClass = 'alert alert-danger';
			//this.message = data.message;	

			this.getAllBlogs();
			const index = this.newComment.indexOf(id);
			this.newComment.splice(index, 1);
			this.enableCommentForm();
			this.commentForm.reset();
			this.processing = false;
			if(this.enabledComments.indexOf(id) < 0) {
				this.expand(id);
			}
		});
	}

	cancelSubmission(id) {
		const index = this.newComment.indexOf(id);
		this.newComment.splice(index, 1);
		this.commentForm.reset();
		this.enableCommentForm();
		this.processing =false;
	}

	expand(id) {
		this.enabledComments.push(id);
	}

	collapse(id) {
		const index = this.enabledComments.indexOf(id);
		this.enabledComments.splice(index, 1);
	}

	enableCommentForm() {
		this.commentForm.get('comment').enable();
	}

	disableCommentForm() {
		this.commentForm.get('comment').disable();
	}

	ngOnInit() {
		this.authService.getProfile().subscribe(profile => {
			this.username = profile.user.username;
			this.avatarPost = profile.user.image;
		});
		this.getAllBlogs();
	}

}
