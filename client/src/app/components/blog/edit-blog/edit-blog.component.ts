import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as socket_io from 'socket.io-client';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

	message;
	messageClass;
	processing = false;
	currentUrl;
	loading = true;
	blog;
	oldTitleBlog;
	newTitleBlog;

	socket;

	username;
	userAuthorizationWithBlogEdit;

	constructor(
		private formBuilder: FormBuilder, 
		private blogService: BlogService, 
		private location: Location,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private authService: AuthService
	) { }

	updateBlogSubmit(){
 		this.processing = true;
 		this.newTitleBlog = this.blog.title;
 		this.blogService.editBlog(this.blog).subscribe(data => {
 			if(!data.success) {
 				this.messageClass = 'alert alert-danger';
 				this.message = data.message;
 				this.processing = false;
 				console.log(data.message);
 			} else {
 				this.messageClass = 'alert alert-success';
 				this.message = data.message;
 				console.log(data.message);
 				setTimeout(() => {
 					this.router.navigate(['/blog']);
 					this.socket.emit('client-edit-blog', {creatorBlog: this.username, oldTitleBlog: this.oldTitleBlog, newTitleBlog: this.newTitleBlog});
 				}, 2000);
 			}
 		});
	}

	goBack() {
		this.location.back();
	}

	ngOnInit() {
		this.currentUrl = this.activatedRoute.snapshot.params;
		this.blogService.getSingleBlog(this.currentUrl.id).subscribe( data => {
			if(!data.success) {
				this.loading = true;
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else {
				this.blog = data.blog;
				this.oldTitleBlog = data.blog.title;
				this.loading = false;
			}
		});

		this.authService.getProfile().subscribe(profile => {
			this.username = profile.user.userAuthorization.username;
			this.userAuthorizationWithBlogEdit = profile.user.userAuthorization.authWithBlog.edit;
		});

		//listen socket
    	this.socket = socket_io("http://localhost:9697");	
	}

}
