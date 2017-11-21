import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router} from '@angular/router';

import * as socket_io from 'socket.io-client';
@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit {

	
	message;
	messageClass;
	foundBlog = false;
	processing = false;
	blog;
	titleBlog;
	currentUrl;

	username;
	userAuthorizationWithBlogDelete;

	socket;

	constructor(
		private blogService: BlogService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private authService: AuthService
	) { }

	deleteBlog() {
		this.processing = true;
		this.blogService.deleteBlog(this.currentUrl.id).subscribe(data => {
			if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
				setTimeout(() => {
					this.router.navigate(['/blog']);
					this.socket.emit('client-delete-blog', {creatorBlog: this.username, titleBlog: this.titleBlog});
				}, 2000);
			}
		});
	}

	ngOnInit() {
		this.currentUrl = this.activatedRoute.snapshot.params;
		this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
			if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else {
				this.blog = {
					title: data.blog.title,
					body: data.blog.body,
					createdBy: data.blog.createdBy,
					createdAt: data.blog.createdAt
				}
				this.titleBlog = this.blog.title;
				this.foundBlog = true;
			}
		});

		this.authService.getProfile().subscribe(profile => {
			this.username = profile.user.userAuthorization.username;
			this.userAuthorizationWithBlogDelete = profile.user.userAuthorization.authWithBlog.delete;
		});

		//listen socket
    	this.socket = socket_io("http://localhost:9697");
	}

}
