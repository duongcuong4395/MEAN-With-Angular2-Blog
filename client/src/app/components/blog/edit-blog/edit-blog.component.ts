import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

	message;
	messageClass;
	form;
	processing = false;
	currentUrl;
	loading = true;
	blog;

	constructor(
		private formBuilder: FormBuilder, 
		private blogService: BlogService, 
		private location: Location,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	updateBlogSubmit(){
 		this.processing = true;
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
				this.message = 'Blog not found';
			} else {
				this.blog = data.blog;
				this.loading = false;
			}
		});	
	}

}
