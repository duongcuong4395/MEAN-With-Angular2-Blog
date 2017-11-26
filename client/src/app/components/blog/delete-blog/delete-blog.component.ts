import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SocketService } from '../../../services/socket.service';

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
	photo;
	userAuthorizationWithBlogDelete;

	constructor(
		private blogService: BlogService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private authService: AuthService,
		private socketService: SocketService
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
				//get notificatetion after deleted blog
				this.socketService.sendRequestDeleteBlogSuccess(this.photo, this.username, this.titleBlog);
				setTimeout(() => {
					this.router.navigate(['/blog']);
				}, 1000);
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
			this.photo = profile.user.userAuthorization.photo;
			this.userAuthorizationWithBlogDelete = profile.user.userAuthorization.authWithBlog.delete;
		});
	}

}
