//blog.js

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user');
const Blog = require('../models/blog');
//compact, URL-safe means of representing claims to be transferred between two parties
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//create API
module.exports = (router) => {
	router.post('/newBlog', (req, res) => {
		if(!req.body.title){
			res.json({success: false, message: 'Blog title was required'});
		} else {
			if(!req.body.body){
				res.json({success: false, message: 'Blog body was required'});
			} else {
				if(!req.body.createdBy){
					res.json({success: false, message: 'Blog creator was required'})
				} else {
					const blog = new Blog ({
						title: req.body.title,
						body: req.body.body,
						createdBy: req.body.createdBy
					});
					blog.save((err) => {
						if (err) {
							if(err.errors){
								if (err.errors.title) {
									res.json({success: false, message: err.errors.title.message });
								} else {
									if (err.errors.body) {
										res.json({success: false, message: err.errors.body.message });
									} else {
										res.json({success: false, message: err});
									}
								}
							}
							else {
								//return error if not related validation
								res.json({ success: false, message: 'Could not save blog. err:' ,  err});
							}
						} else {
							res.json({success : true, message: 'Blog saved' });
						}
					});
				}
			}
		}
		//res.send('test');
	});

	router.get( '/allBlogs',(req, res) => {
		Blog.find({}, (err, blogs) => {
			if(err){
				res.json({success: false, message: err});
			} else {
				if(!blogs){
					res.json({success: false, message: 'No blogs data'});
				} else {
					res.json({success: true, blogs: blogs });
				}
			}
		}).sort({'_id': -1});
	});
	return router;
}