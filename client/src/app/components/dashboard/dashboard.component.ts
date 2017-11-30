import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	
	messageClass;
	message;

  messageLoginClass;
  messageLogin;

  messageWriteBlogClass;
  messageWriteBlog;

  messageCommentBlogClass;
  messageCommentBlog;

  messageLikeBlogClass;
  messageLikeBlog;

  messageDislikeBlogClass;
  messageDislikeBlog;

	username;
	month = [];
	year = [];
	yearSelect;
	monthSelect;
	numberUserOnlineInMonth = 0;
  numberUserWriteBlogInMonth = 0;
  numberUserCommentBlogInMonth = 0;
  numberUserLikeBlogInMonth = 0;
  numberUserDislikeBlogInMonth = 0;

  constructor(
    private authService: AuthService, 
    private blogService: BlogService
  ) {
  	var today = new Date();
  	var yearNow = today.getFullYear();
  	this.year.push(yearNow);
  	for(var i=1; i <= 12; i++) {
  		this.month.push(i);
  		yearNow--;
  		this.year.push(yearNow);
  	}
  }

	searchHistory() {
		this.authService.getUserUserHistoryLoginInMonth(this.username, this.monthSelect, this.yearSelect).subscribe(data => {
			if(!data.success){
				this.messageClass = 'alert alert-danger';
				this.message = data.message;
        this.numberUserOnlineInMonth = 0;
        this.numberUserWriteBlogInMonth = 0;
			} else {
				this.numberUserOnlineInMonth = data.userHL.numberUserLoginInMonth;
				this.getWidthUserLogin();
        this.authService.getUserUserHistoryWriteBlogInMonth(this.username, this.monthSelect, this.yearSelect).subscribe(data => {
          if(!data.success){
            this.messageWriteBlogClass = 'alert alert-danger';
            this.messageWriteBlog = data.message;
          } else {
            this.numberUserWriteBlogInMonth = data.userHL.numberUserWriteBlogInMonth;
            this.getWidthUserWriteBlog();
          }
        });

        this.authService.getUserHistoryCommentBlogInMonth(this.username, this.monthSelect, this.yearSelect).subscribe(data => {
          if(!data.success){
            this.messageCommentBlogClass = 'alert alert-danger';
            this.messageCommentBlog = data.message;
          } else {
            this.numberUserCommentBlogInMonth = data.userHC.numberUserCommentBlogInMonth;
            this.getWidthUserCommentBlog();
          }
        });

        this.authService.getUserHistoryLikeBlogInMonth(this.username, this.monthSelect, this.yearSelect).subscribe(data => {
          if(!data.success){
            this.messageLikeBlogClass = 'alert alert-danger';
            this.messageLikeBlog = data.message;
          } else {
            this.numberUserLikeBlogInMonth = data.userHL.numberUserLikeOrDislike.numberUserLikeBlogInMonth;
            this.getWidthUserLikeBlog();
          }
        });

        this.authService.getUserHistoryDislikeBlogInMonth(this.username, this.monthSelect, this.yearSelect).subscribe(data => {
          if(!data.success){
            this.messageDislikeBlogClass = 'alert alert-danger';
            this.messageDislikeBlog = data.message;
          } else {
            this.numberUserDislikeBlogInMonth = data.userHDL.numberUserLikeOrDislike.numberUserDislikeBlogInMonth;
            this.getWidthUserDislikeBlog();
          }
        });
			}
		});
	}

	getWidthUserLogin() {
		return this.numberUserOnlineInMonth + '%';
	}

  getWidthUserWriteBlog() {
    return this.numberUserWriteBlogInMonth + '%';
  }

  getWidthUserCommentBlog() {
    return this.numberUserCommentBlogInMonth + '%';
  }

  getWidthUserLikeBlog() {
    return this.numberUserLikeBlogInMonth + '%';
  }

  getWidthUserDislikeBlog() {
    return this.numberUserDislikeBlogInMonth + '%';
  }

    //(ngModelChange)="selectMonth()"
    selectMonth(){
    	this.monthSelect = this.monthSelect;
  	}

    //(ngModelChange)="selectYear()"
  	selectYear(){
    	this.yearSelect = this.yearSelect;
  	}

  ngOnInit() {
  	this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.userAuthorization.username;
  	});
  }

}
