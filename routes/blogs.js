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

	router.get('/singleBlog/:id', (req, res) => {
		if (!req.params.id) {
			res.json({success: false, message: 'No blog ID was provided'});
		} else {
			Blog.findOne({_id: req.params.id}, (err, blog) => {
				if (err) {
					res.json({success: false, message: 'Not a valid blog id'});
				} else {
					if(!blog){
						res.json({success: false, message: 'No blog data'});
					} else {
						//req.decoded : authentication.js
						User.findOne({_id: req.decoded.userId}, (err, user) => {
							if (err) {
								res.json({success: false, message: err});
							} else {
								if(!user) {
									res.json({success: false, message: 'Unable to authenticate user'});
								} else {
									if(user.username !== blog.createdBy) {
										res.json({success: false, message: 'You are not authorized to edit this blog'});
									} else {
										res.json({success: true, blog: blog });
									}
								}
							}
						});
					}
				}
			});
		} 
	});

	router.put('/updateBlog', (req, res) => {
		if(!req.body._id) {
			res.json({success: false, message: 'No blog ID was provided'});
		} else {
			Blog.findOne({ _id: req.body._id}, (err, blog) => {
				if(err){
					res.json({success: false, message: 'Not a valid blog id'});
				} else {
					if(!blog) {
						res.json({success: false, message: 'Not found blog'});
					} else {
						//req.decoded : authentication.js
						User.findOne({_id: req.decoded.userId}, (err, user) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								if(!user) {
									res.json({success: false, message: 'Unable to authenticate user'});
								} else {
									if(user.username !== blog.createdBy) {
										res.json({success: false, message: 'You are not authorized to edit this blog'});
									} else {
										blog.title = req.body.title;
										blog.body = req.body.body;
										blog.save((err) => {
											if(err){
												res.json({success: false, message: err});
											} else {
												res.json({success: true, message: 'Blog updated'});
											}
										});
									}	
								}
							}
						});
					}	
				}
			});
		}
	});

	router.delete('/deleteBlog/:id', (req, res) => {
		//check id params
		if(!req.params.id) {
			res.json({success: false, message: 'No blog ID was provided'});
		} else {
			Blog.findOne({ _id: req.params.id}, (err, blog) => {
				if(err) {
					res.json({success: false, message: err});
				} else {
					if(!blog) {
						res.json({success: false, message: 'This blog not found database'});
					} else {
						User.findOne({ _id: req.decoded.userId}, (err, user) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								if(!user) {
									res.json({success: false, message: 'Unable to authenticate user'});
								} else {
									if(user.username !== blog.createdBy) {
										res.json({success: false, message: 'You are not authorized to delete this blog'});
									} else {
										blog.remove((err) => {
											if (err) {
												res.json({success: false, message: 'Blog delete not found: ' + err});	
											} else {
												res.json({success: true, message: 'This blog deleted'});
											}
										}); 
									} 
								}
							}
						});
					}
				}
			});
		}
	});

	return router;
}