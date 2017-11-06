//blog.js

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user');
const Blog = require('../models/blog');
//compact, URL-safe means of representing claims to be transferred between two parties
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//create API (router)
//app.use('/blogs', blogs);
//domain + /blogs/ + router api
module.exports = (router) => {

	//router api to add a blog
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

	//router api ton get all blog
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

	//router api to get single blog by id's blog
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

	//router api to update a blog
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

	//router api to delete a blog
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


	//router api for user click like button
	router.put('/likeBlog', (req, res) => {
		//check id parameter form body of user send request 
		if(!req.body.id) {
			res.json({success: false, message: 'No id was provided'});
		} else {
			//find Blog by id parameter()
			Blog.findOne({_id: req.body.id}, (err,blog) => {
				if(err) {
					res.json({success: false, message: 'Invalid blog id: ' + err});
				} else {
					if(!blog) {
						res.json({success: false, message: 'Not found this id of blog'});
					} else {	
						//find user(authenticate)
						User.findOne({_id: req.decoded.userId}, (err, user) => {
							if(err) {
								res.json({success: false, message: 'User err: ' + err});
							} else {
								if(!user) {
									res.json({success: false, message: 'Cound not authenticate user'});
								} else {
									//check user-loggedIn(authentivate) with creator this blog
									if(user.username === blog.createdBy) {
										res.json({success: false, message: 'Can not like your own post(blog)'});
									} else {
										//check user-LoggedIn(authenticate) liked this blog
										//likedBy; blog model: array
										if(blog.likedBy.includes(user.username)){
											 res.json({success: false, message: 'You already liked this post(blog)'});
										} else {
											//check user-LoggedIn(authenticate) disliked this blog
											//likedBy; blog model: array
											if(blog.dislikedBy.includes(user.username)) {
												//number user dislike  - 1
												blog.dislikes--; 
												//Get location of blog.dislikedBy in array by username 
												const arrayIndex = blog.dislikedBy.indexOf(user.username);
												//and slice
												blog.dislikedBy.splice(arrayIndex, 1);

												//number user dislike  + 1
												blog.likes++; 
												//and push useer naem into blog.likedBy array
												blog.likedBy.push(user.username);
												blog.save((err) => {
													if(err) {
														res.json({success: false, message: 'Like click faild: ' + err});
													} else {
														res.json({success: true, message: 'You liked this blog'});
													}
												});
											} else {
												//number user dislike  + 1
												blog.likes++; 
												//and push useer naem into blog.likedBy array
												blog.likedBy.push(user.username);
												blog.save((err) => {
													if(err) {
														res.json({success: false, message: 'Like click faild: ' + err});
													} else {
														res.json({success: true, message: 'You liked this blog'});
													}
												});
											}
										}
									}
								}
							}
						});
					}
				}
			});
		}
	});


	//router api for user click dislike button
	router.put('/dislikeBlog', (req, res) => {
		//check id parameter form body of user send request 
		if(!req.body.id) {
			res.json({success: false, message: 'No id was provided'});
		} else {
			//find Blog by id parameter()
			Blog.findOne({_id: req.body.id}, (err,blog) => {
				if(err) {
					res.json({success: false, message: 'Invalid blog id: ' + err});
				} else {
					if(!blog) {
						res.json({success: false, message: 'Not found this id of blog'});
					} else {	
						//find user(authenticate)
						User.findOne({_id: req.decoded.userId}, (err, user) => {
							if(err) {
								res.json({success: false, message: 'User token err:' + err});
							} else {
								if(!user) {
									res.json({success: false, message: 'Cound not authenticate user'});
								} else {
									//check user-loggedIn(authentivate) with creator this blog
									if(user.username === blog.createdBy) {
										res.json({success: false, message: 'Can not dislike your own post(blog)'});
									} else {
										//check user-LoggedIn(authenticate) disliked this blog
										//dislikedBy; blog model: array
										if(blog.dislikedBy.includes(user.username)){
											 res.json({success: false, message: 'You already disliked this post(blog)'});
										} else {
											//check user-LoggedIn(authenticate) disliked this blog
											//likedBy; blog model: array
											if(blog.likedBy.includes(user.username)) {
												//number user like  - 1
												blog.likes--; 
												//Get location of blog.dislikedBy in array by username 
												const arrayIndex = blog.likedBy.indexOf(user.username);
												//and slice
												blog.likedBy.splice(arrayIndex, 1);

												//number user dislike  + 1
												blog.dislikes++; 
												//and push useer naem into blog.likedBy array
												blog.dislikedBy.push(user.username);
												blog.save((err) => {
													if(err) {
														res.json({success: false, message: 'Dislike click faild: ' + err});
													} else {
														res.json({success: true, message: 'You disliked this blog'});
													}
												});
											} else {
												//number user dislike  + 1
												blog.dislikes++; 
												//and push useer naem into blog.likedBy array
												blog.dislikedBy.push(user.username);
												blog.save((err) => {
													if(err) {
														res.json({success: false, message: 'Dislike click faild: ' + err});
													} else {
														res.json({success: true, message: 'You disliked this blog'});
													}
												});
											}
										}
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