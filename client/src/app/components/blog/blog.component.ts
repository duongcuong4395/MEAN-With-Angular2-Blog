import { 
	Component, OnInit, AfterViewChecked, ElementRef, ViewChild
} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';
import { SocketService } from '../../services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewChecked {
	@ViewChild('scrollMe') private myScrollContainer: ElementRef;

	messageClass;
	message;

	isNotificationWroteBlog = false;
	isNotificationEditBlog = false;
	isNotificationDeleteBlog = false;

	newPost = false;
	loadingBlogs = false;

	form;
	commentForm;

	username;
	idUser;
	avatarPost;
	userAuthorizationWithBlogCreate = false;
	userAuthorizationWithBlogEdit = false;
	userAuthorizationWithBlogDelete = false;

	blogPosts;
	newComment = [];
	enabledComments = [];
	titleBlog;
	processing = false;

	icons1 = true;
	icons2 = false;
	icons3 = false;
	iconChat;
	iconComment;
	numbIcon;

	//all scope for realtime
	socketConnection;
	allActive;
	usersOnline;
	userChat;
	messageChat;
	messagesChat = [];
	isRequestChat = false;
	messageCallUserChat;
	messageCallUserChatClass;

	userComment;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private blogService: BlogService,
		private socketService: SocketService,
		private router: Router
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
			userCreatedBlog: this.username,
			idUserCreatedBlog: this.idUser,
			avatarPost: this.avatarPost
		}
		this.titleBlog = this.form.get('title').value;

		this.blogService.newBlog(blog).subscribe(data => {
			if(!data.success){
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
				this.processing = false;
				this.enableNewBlogForm();
			} else {
				//Send request after has been written blog
				this.socketService.sendRequestWriteBlogSuccess(this.avatarPost, this.username, this.titleBlog);
				this.authService.updateHistoryWriteBlog(this.username).subscribe(data => {
					//dosomething
				});
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
			if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
				/*
				this.authService.updateHistoryLikeBlog(this.username).subscribe(data => {
					this.messageClass = 'alert alert-success';
					this.message = data.message;
				});
				*/
				this.socketService.sendRequestLikeBlogSuccess(this.username, this.avatarPost, data.blog.title);
				this.getAllBlogs();
			}
		});
	}

	dislikeBlog(id) {
		this.blogService.dislikeBlog(id).subscribe(data => {
		
			if(!data.success) {
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
			} else {
				this.messageClass = 'alert alert-success';
				this.message = data.message;
				/*
				this.authService.updateHistoryDislikeBlog(this.username).subscribe(data => {
					//do something
				});
				*/
				this.socketService.sendRequestDislikeBlogSuccess(this.username, this.avatarPost, data.blog.title);
				this.getAllBlogs();
			}
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
		this.userComment = this.commentForm.get('comment').value;

		this.authService.updateHistoryCommentBlog(this.username).subscribe(data => {
				//dosomething
			});
		this.blogService.postComment(id, comment, this.iconChat, this.numbIcon).subscribe(data =>{
			this.getAllBlogs();
			const index = this.newComment.indexOf(id);
			this.newComment.splice(index, 1);
			this.enableCommentForm();
			this.commentForm.reset();
			this.processing = false;

			this.socketService.sendRequestUserComment(this.avatarPost, this.username, this.userComment, data.blog.title);

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

	sendMessage () {
		this.socketService.sendRequestSendMessage(this.avatarPost, this.username, this.messageChat, this.iconChat, this.numbIcon);
		this.messageChat = '';
		this.iconChat = '';
	}

	sendIcon(icon, numberIcon) {
		this.iconChat = icon;
		this.numbIcon = numberIcon;
		//dosomething
	}

	ngAfterViewChecked() {        
        this.scrollToBottom();        
    }

	scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }

    callUserChat(username) {
		this.socketService.sendRequestCallUserChat(username, this.username);
    }

    showIcons(numberIconShow) {
    	switch(numberIconShow) {
    		case 1: {
    			this.icons1 = true;
    			this.icons2 = false;
    			this.icons3 = false;
    			break;
    		}
    		case 2: {
    			this.icons1 = false;
    			this.icons2 = true;
    			this.icons3 = false;
    			break;
    		}
    		case 3: {
    			this.icons1 = false;
    			this.icons2 = false;
    			this.icons3 = true;
    			break;
    		}
    		default :{
    			this.icons1 = true;
    			this.icons2 = false;
    			this.icons3 = false;
    			break;
    		}
    	}
    }

    loadAll() {
    	this.socketService.sendRequestloadAll();

    	//all active of users
    	this.socketConnection = this.socketService.getResponseAllactive().subscribe(data => {
    		this.allActive = data;
    	});
    	//All user online
    	this.socketConnection = this.socketService.getResponseUsersOnline().subscribe(data => {
    		this.usersOnline = data;
    	});
    }

	ngOnInit() {
		//check user logged in
		if(this.authService.loggedIn()) {
			//Get profile user after logged in
			this.authService.getProfile().subscribe(profile => {
				this.idUser = profile.user._id;
				this.avatarPost = profile.user.userAuthorization.photo;
				this.username = profile.user.userAuthorization.username;
				this.userAuthorizationWithBlogCreate = profile.user.userAuthorization.authWithBlog.create;
				this.userAuthorizationWithBlogEdit = profile.user.userAuthorization.authWithBlog.create;
				this.userAuthorizationWithBlogDelete = profile.user.userAuthorization.authWithBlog.create;
				this.socketService.sendRequestAddUserOnline(this.username, this.avatarPost);
			});
			
			//socket response all requests from client sended
			//User has been written blog
	    	this.socketConnection = this.socketService.getResponseWriteBlogSuccess().subscribe(data => {
	    		this.messageClass = 'alert alert-success';
	    		this.isNotificationWroteBlog = true;
	    		this.isNotificationDeleteBlog = false;
	    		this.isNotificationEditBlog = false;
	          	this.message = data;
	          	this.getAllBlogs();
	    	});

	    	//User has been edited blog
	    	this.socketConnection = this.socketService.getResponseEditeBlogSuccess().subscribe(data => {
	    		this.messageClass = 'alert alert-success';
	    		this.isNotificationWroteBlog = false;
	    		this.isNotificationDeleteBlog = false;
	    		this.isNotificationEditBlog = true;
	          	this.message = data;
	          	this.getAllBlogs();
	    	});

	    	//User has been deleted blog
	    	this.socketConnection = this.socketService.getResponseDeleteBlogSuccess().subscribe(data => {
	    		this.isNotificationWroteBlog = false;
	    		this.isNotificationDeleteBlog = true;
	    		this.isNotificationEditBlog = false;
	          	this.getAllBlogs();
	    	});

	    	//all active of users
	    	this.socketConnection = this.socketService.getResponseAllactive().subscribe(data => {
	    		this.allActive = data;
	    	});

	    	//All user online
	    	this.socketConnection = this.socketService.getResponseUsersOnline().subscribe(data => {
	    		this.usersOnline = data;
	    	});

	    	//All messages chat
	    	this.socketConnection = this.socketService.getResponseMessage().subscribe(data => {
	    		this.messagesChat.push(data);
	    		this.scrollToBottom();
	    	});

	    	//
	    	//All messages chat
	    	this.socketConnection = this.socketService.getResponseCallUserChat().subscribe(data => {
	    		this.isRequestChat = true;
	    		setTimeout(() => {
	    			this.messageCallUserChatClass = 'alert alert-success';
	    			this.messageCallUserChat = data;
	    			this.isRequestChat = false;
	    		}, 2000);
	    	});

			this.getAllBlogs();
		} else {
			//User not logged in return route 'domain/login'(page login)
			this.router.navigate(['/login']);
		}
	}

}
