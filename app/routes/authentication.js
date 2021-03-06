const mongoose       = require('mongoose');
mongoose.Promise     = global.Promise;
const User           = require('../models/user');
var userAuth         = require('../models/userAuth');
var userHistory      = require('../models/history');
const jwt            = require('jsonwebtoken');
const config         = require('../config/database');
const hbs            = require('nodemailer-express-handlebars');
const nodemailer     = require('nodemailer');
const xoauth2        = require('xoauth2');



//create API
module.exports = (router) => {

	//add user
	router.post('/register', (req, res) => {

		//check email provided
		if(!req.body.email){
			res.json({ success: false, message: 'you must provide an email' });
		}else{
			//check username provided
			if(!req.body.username){
				res.json({ success: false, message: 'you must provide an usename' });
			}else{
				if (!req.body.name) {
					res.json({ success: false, message: 'you must provide an name' });
				} else {
					//check password provided
					if(!req.body.password){
						res.json({ success: false, message: 'you must provide an password' });
					}else{
						if(!req.body.image) {
							res.json({success : false, message: 'No file image' , image: req.body.image});
						} else {
							//User from models/user
							//create new user object and apply user input(req.body)
							/*let user = new User({
								email : req.body.email,
								username : req.body.username,
								password : req.body.password,
								image: req.body.image
							});*/
							var date = new Date();
							userAuth.count({
								'userAuthorization.createdAt.date': date.getDate(), 
								'userAuthorization.createdAt.month': date.getMonth(), 
								'userAuthorization.createdAt.year': date.getFullYear()
							}, (err, count) => {
								if(err) {
									res.json({ success: false, message: 'Add user fail: ' + err});
								} else {
									//console.log('register at : ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' is ' + count);
									if(count >= 3) {
										res.json({ success: false, message: 'Sorry, exceeded the number registered today. You can sign up tomorrow.' });
									} else {
										var user            = new userAuth();
										user.userAuthorization.authorizationType = 'Local';
										user.userAuthorization.email = req.body.email;
										user.userAuthorization.username = req.body.username;
										user.userAuthorization.name = req.body.name;
										user.userAuthorization.password = req.body.password;
										user.userAuthorization.photo = req.body.image;
										
										user.userAuthorization.authWithBlog.create = true;
										user.userAuthorization.authWithBlog.edit = true;
										user.userAuthorization.authWithBlog.delete = true;

										//save user to database
										user.save((err)=>{
											//error happen(occurred)
											if(err){
												//check doupli key
												if(err.code === 11000){
													res.json({ success: false, message: 'username or email already exits'});
												}else{
													//check validation
													if (err.errors) {
														//if username field
														if (err.errors.email) {
															res.json({ success: false, message: err.errors.email.message});
														} else {
															//if username field
															if (err.errors.name) {
																res.json({ success: false, message: err.errors.name.message});
															} else {
																//if password field
																if(err.errors.password){
																	res.json({ success: false, message: err.errors.password.message});
																} else {
																	//return any other error may be happen
																	res.json({ success: false, message: err});
																}
															}
														}
													} else {
														//return error if not related validation
														res.json({ success: false, message: 'Could not save user. err:' ,  err});
													}
												}
											}else{
												//error not happen
												//return success
												res.json({ success: true, message: 'User saved!'});

											}
										});
									}
								}
							});
						}
					}
				}
			}
		}
	});

	router.post('/forgotpassword', (req,res) => {
		if(!req.body.username) {
			res.json({success: false, message: 'No username was not provided'});
		} else {
			if(!req.body.email) {
				res.json({success: false, message: 'No email was not provided'});
			} else {
				userAuth.findOne({'userAuthorization.username': req.body.username, 'userAuthorization.email': req.body.email}, (err, user) => {
					if(err) {
						res.json({success: false, message: 'user not fonnd: ' + err});
					} else {
						var transporter = nodemailer.createTransport({
							service: 'gmail',
							auth: {
								type: 'OAuth2',
								user: 'dangduongcuong@gmail.com',
								clientId: '970404624406-0gd5lf64a0sv4norfqamkd5iddmfgccl.apps.googleusercontent.com',
								clientSecret: 'IIUt6bOFahV7lTe-VHG03-ik',
								refreshToken: '1/fxDoSxcx7FkK4kg6Jnv_241MWl_2RZkJZtpp8t3SZmE'	
							},
						});

						//content mail
						transporter.use('compile', hbs({
							//path file email
							viewPath: 'views',
							extName: '.ejs'

						}));

						var username = req.body.username;
						var email = req.body.email;


							// send mail with defined transport object
						transporter.sendMail({
							from: 'duongcuong <dangduongcuong@gmail.com>',
							to: email,
							subject: 'test nodemailer send mail',
							template: 'mail',
							context: {
								username,
								email
							}

							//if(error){
							   // console.log('send mail error: ' + error);
							//}else{
							 //  console.log('sended mail: ');
							//}

							// if you don't want to use this transport object anymore, uncomment following line
							//transporter.close(); // shut down the connection pool, no more messages
							}, function(err, response) {
								if(err){
									//res.send('send: ' + err);
									res.json({success: false, message: 'send mail err' + err});
									//console.log('send mail err: ' + err);
								} else {
									res.json({success: true, message: 'sended mail'});
									//res.send('Dang ky thanh cong');
								}
						})
						//res.json({success: true, message: 'found user', user: user});
					}
				});
			}
		}
	});

	router.put('/changepassword/:username/:email', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'No username was not provided'});
		} else {
			if (!req.params.email) {
				res.json({success: false, message: 'No email was not provided'});	
			} else {
				if(!req.body.password) {
					res.json({success: false, message: 'No email was not provided'});
				} else {
					userAuth.findOne({'userAuthorization.username': req.params.username, 'userAuthorization.email': req.params.email}, (err, user) => {
						if(err) {
							res.json({success: false, message: 'user find err: ' + err});
						} else {
							if(!user) {
								res.json({success: false, message: 'user not found', username: req.params.username, email: req.params.email});
							} else {
								user.userAuthorization.password = req.body.password;
								user.save((err) => {
									if(err){
										res.json({success: false, message: 'Change faild: ' + err});
									} else {
										res.json({success: true, message: 'Changed password'});
									}
								});
							}
						}
					});
				}
			}
			
		}
	});

	//router.post('uploadfile', )

	//route check email of user is available for register
	router.get('/checkEmail/:email', (req, res) => {
		//check email was provided in parameters
		if(!req.params.email){
			res.json({ success: false, message: 'Email was not provided!'});
		} else {
			//find email in database
			userAuth.findOne({'userAuthorization.email': req.params.email}, (err, user) => {
				//check connection error was found
				if(err) {
					res.json({ success: false, message: err});
				} else {
					//check email of User error was found
					if(user){
						res.json({ success: false, message: 'Email is already taken'});
					} else {
						res.json({ success: true, message: 'Email is available'});
					}
				}
			});
		}
	});

	router.get('/checkUsername/:username', (req, res) => {
		if(!req.params.username){
			res.json({ success: false, message: 'Username was not provided!'});
		} else {
			userAuth.findOne({'userAuthorization.username': req.params.username}, (err, user) => {
				if(err) {
					res.json({ success: false, message: err});
				} else {
					if(user){
						res.json({ success: false, message: 'Username is already taken'});
					} else {
						res.json({ success: true, message: 'Username is available'});
					}
				}
			});
		}
	});

	router.get("/", (req, res) => {
		res.json({ success: false, message: 'No action'});
	});

	router.post('/sociallogin/:authName/:name/:idUser', (req, res) => {
		if(!req.params.authName) {
			res.json({ success: false, message: req.params.authName + 'was not provided!'});
		} else {
			if(!req.params.name) {
				res.json({ success: false, message: req.params.name + 'was not provided!'});
			} else {
				if(!req.params.idUser) {
					res.json({ success: false, message: req.params.idUser + 'was not provided!'});
				} else {
					const token = jwt.sign({ userId: req.params.idUser , authName: req.params.authName }, config.secret, { expiresIn: '24h' });
					res.json({ success: true, message: 'DuongCuongBlog welcome you.', token: token, user: {username: req.params.name} });
				}
			}
		}
	});

	router.post('/login', (req, res) => {
		//check username was provided in parameters
		if(!req.body.username) {
			res.json({ success: false, message: 'Username was not provided!'});
		} else {
			//check password was provided in parameters
			if(!req.body.password) {
				res.json({ success: false, message: 'password was not provided!'});
			} else {
				userAuth.findOne({'userAuthorization.username': req.body.username, 'userAuthorization.authorizationType': 'Local'}, (err, user) => {
					//check connection error was found
					if(err) {
						res.json({ success: false, message: err });
					} else {
						if(!user) {
							//username was not found
							res.json({ success: false, message: 'User not found' });
						} else {
							//user.comparePassword from models/user.js
							//get bool value by compare password input with password encrypt in database
							const validPassword = user.comparePassword(req.body.password);
							//check password input
							if(!validPassword) {
								res.json({ success: false, message: 'password invalid' });
							} else {
								//create token (json web token)
								//wt.sign(payload, secretOrPrivateKey, [options, callback])
								//expiresIn: expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2 days", "10h", "7d"
								const token = jwt.sign({ userId: user._id, authName: 'local', username: req.body.username }, config.secret, { expiresIn: '24h' });
								res.json({ success: true, message: 'password valid - (success)', token: token, user: {username: user.userAuthorization.username} });
							}
						}
					}
				});
				
			}
		}
	});

	router.get('/getUserHistoryDislikeBlogInMonth/:username/:month/:year', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'username was not provided!'});
		} else {
			if(!req.params.month) {
				res.json({success: false, message: 'month was not provided!'});
			} else {
				if(!req.params.year) {
					res.json({success: false, message: 'year was not provided!'});
				} else {
					userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'LikeOrDislike', 'dateUserOnline.month': req.params.month, 'dateUserOnline.year': req.params.year}, (err, uHDL) => {
						if(err) {
							res.json({success: false, message: err});
						} else {
							if(!uHDL) {
								res.json({success: false, message: 'You have not dislike blog yet this month'});
							} else {
								res.json({success: true, userHDL: uHDL});
							}
						}
					});
				}
			}
		}
	});

	router.post('/updateUserHistoryDislikeBlogInMonth/:username', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'Username was not provided!'});
		} else {
			var today = new Date();
			//update history of user login
			userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'LikeOrDislike' ,'dateUserOnline.month': today.getMonth() + 1, 'dateUserOnline.year': today.getFullYear()}, (err, uHDL) => {
				//check err
				if(err) {
					res.json({success: false, message: err});
				} else {
					//check not found record user history
					if(!uHDL){
						const userHisDislikeBlog = new userHistory();
						userHisDislikeBlog.historyType = 'LikeOrDislike';
						userHisDislikeBlog.usernameOnline = req.params.username;
						userHisDislikeBlog.dateUserOnline.date = today.getDate();
						userHisDislikeBlog.dateUserOnline.month = today.getMonth() + 1;
						userHisDislikeBlog.dateUserOnline.year = today.getFullYear();
						userHisDislikeBlog.numberUserLikeOrDislike.numberUserDislikeBlogInMonth = 1;
						userHisDislikeBlog.save((err) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					} else {
						if(uHDL.numberUserLikeOrDislike.numberUserLikeBlogInMonth > 0) {
							uHDL.numberUserLikeOrDislike.numberUserLikeBlogInMonth = uHDL.numberUserLikeOrDislike.numberUserLikeBlogInMonth - 1;
						}
						uHDL.numberUserLikeOrDislike.numberUserDislikeBlogInMonth = uHDL.numberUserLikeOrDislike.numberUserDislikeBlogInMonth + 1;
						uHDL.save((err) =>{
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					}
				}
			});
		}
	});

	router.get('/getUserHistoryLikeBlogInMonth/:username/:month/:year', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'username was not provided!'});
		} else {
			if(!req.params.month) {
				res.json({success: false, message: 'month was not provided!'});
			} else {
				if(!req.params.year) {
					res.json({success: false, message: 'year was not provided!'});
				} else {
					userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'LikeOrDislike', 'dateUserOnline.month': req.params.month, 'dateUserOnline.year': req.params.year}, (err, uHL) => {
						if(err) {
							res.json({success: false, message: err});
						} else {
							if(!uHL) {
								res.json({success: false, message: 'You have not like blog yet this month'});
							} else {
								res.json({success: true, userHL: uHL});
							}
						}
					});
				}
			}
		}
	});

	router.post('/updateUserHistoryLikeBlogInMonth/:username', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'Username was not provided!'});
		} else {
			var today = new Date();
			//update history of user login
			userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'LikeOrDislike' ,'dateUserOnline.month': today.getMonth() + 1, 'dateUserOnline.year': today.getFullYear()}, (err, uHL) => {
				//check err
				if(err) {
					res.json({success: false, message: err});
				} else {
					//check not found record user history
					if(!uHL){
						const userHisLikeBlog = new userHistory();
						userHisLikeBlog.historyType = 'LikeOrDislike';
						userHisLikeBlog.usernameOnline = req.params.username;
						userHisLikeBlog.dateUserOnline.date = today.getDate();
						userHisLikeBlog.dateUserOnline.month = today.getMonth() + 1;
						userHisLikeBlog.dateUserOnline.year = today.getFullYear();
						userHisLikeBlog.numberUserLikeOrDislike.numberUserLikeBlogInMonth = 1;
						userHisLikeBlog.save((err) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					} else {
						if(uHL.numberUserLikeOrDislike.numberUserDislikeBlogInMonth > 0) {
							uHL.numberUserLikeOrDislike.numberUserDislikeBlogInMonth = uHL.numberUserLikeOrDislike.numberUserDislikeBlogInMonth - 1;
						}
						uHL.numberUserLikeOrDislike.numberUserLikeBlogInMonth = uHL.numberUserLikeOrDislike.numberUserLikeBlogInMonth + 1;
						uHL.save((err) =>{
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					}
				}
			});
		}
	});

	router.get('/getUserHistoryCommentBlogInMonth/:username/:month/:year', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'username was not provided!'});
		} else {
			if(!req.params.month) {
				res.json({success: false, message: 'month was not provided!'});
			} else {
				if(!req.params.year) {
					res.json({success: false, message: 'year was not provided!'});
				} else {
					userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'CommentBlog', 'dateUserOnline.month': req.params.month, 'dateUserOnline.year': req.params.year}, (err, uHC) => {
						if(err) {
							res.json({success: false, message: err});
						} else {
							if(!uHC) {
								res.json({success: false, message: 'You have not comment blog yet this month'});
							} else {
								res.json({success: true, userHC: uHC});
							}
						}
					});
				}
			}
		}
	});

	router.post('/updateUserHistoryCommentBlogInMonth/:username', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'Username was not provided!'});
		} else {
			var today = new Date();
			//update history of user login
			userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'CommentBlog' ,'dateUserOnline.month': today.getMonth() + 1, 'dateUserOnline.year': today.getFullYear()}, (err, uHC) => {
				//check err
				if(err) {
					res.json({success: false, message: err});
				} else {
					//check not found record user history
					if(!uHC){
						
						const userHisCommentBlog = new userHistory();
						userHisCommentBlog.historyType = 'CommentBlog';
						userHisCommentBlog.usernameOnline = req.params.username;
						userHisCommentBlog.dateUserOnline.date = today.getDate();
						userHisCommentBlog.dateUserOnline.month = today.getMonth() + 1;
						userHisCommentBlog.dateUserOnline.year = today.getFullYear();
						userHisCommentBlog.numberUserCommentBlogInMonth = 1;
						userHisCommentBlog.save((err) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					} else {
						uHC.numberUserCommentBlogInMonth = uHC.numberUserCommentBlogInMonth + 1;
						uHC.save((err) =>{
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					}
				}
			});
		}
	});

	router.get('/getUserUserHistoryWriteBlogInMonth/:username/:month/:year', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'username was not provided!'});
		} else {
			if(!req.params.month) {
				res.json({success: false, message: 'month was not provided!'});
			} else {
				if(!req.params.year) {
					res.json({success: false, message: 'year was not provided!'});
				} else {
					userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'WriteBlog', 'dateUserOnline.month': req.params.month, 'dateUserOnline.year': req.params.year}, (err, uHL) => {
						if(err) {
							res.json({success: false, message: err});
						} else {
							if(!uHL) {
								res.json({success: false, message: 'You have not blogged yet this month'});
							} else {
								res.json({success: true, userHL: uHL});
							}
						}
					});
				}
			}
		}
	});

	router.post('/updateUserHistoryWriteBlogInMonth/:username', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'Username was not provided!'});
		} else {
			var today = new Date();
			//update history of user login
			userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'WriteBlog' ,'dateUserOnline.month': today.getMonth() + 1, 'dateUserOnline.year': today.getFullYear()}, (err, uHL) => {
				//check err
				if(err) {
					res.json({success: false, message: err});
				} else {
					//check not found record user history
					if(!uHL){
						const userHisWriteBlog = new userHistory();
						userHisWriteBlog.historyType = 'WriteBlog';
						userHisWriteBlog.usernameOnline = req.params.username;
						userHisWriteBlog.dateUserOnline.date = today.getDate();
						userHisWriteBlog.dateUserOnline.month = today.getMonth() + 1;
						userHisWriteBlog.dateUserOnline.year = today.getFullYear();
						userHisWriteBlog.numberUserWriteBlogInMonth = 1;
						userHisWriteBlog.save((err) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					} else {
						uHL.numberUserWriteBlogInMonth = uHL.numberUserWriteBlogInMonth + 1;
						uHL.save((err) =>{
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					}
				}
			});
		}
	});

	router.get('/getUserUserHistoryLoginInMonth/:username/:month/:year', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'username was not provided!'});
		} else {
			if(!req.params.month) {
				res.json({success: false, message: 'month was not provided!'});
			} else {
				if(!req.params.year) {
					res.json({success: false, message: 'year was not provided!'});
				} else {
					userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'Login', 'dateUserOnline.month': req.params.month, 'dateUserOnline.year': req.params.year}, (err, uHL) => {
						if(err) {
							res.json({success: false, message: err});
						} else {
							if(!uHL) {
								res.json({success: false, message: 'This month you not login'});
							} else {
								res.json({success: true, userHL: uHL});
							}
						}
					});
				}
			}
		}
	});

	router.post('/updateUserHistoryLoginInMonth/:username', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'Username was not provided!'});
		} else {
			var today = new Date();
			//update history of user login
			userHistory.findOne({'usernameOnline': req.params.username, 'historyType': 'Login' ,'dateUserOnline.month': today.getMonth() + 1, 'dateUserOnline.year': today.getFullYear()}, (err, uHL) => {
				//check err
				if(err) {
					res.json({success: false, message: err});
				} else {
					//check not found record user history
					if(!uHL){
						const userHisLogin = new userHistory();
						userHisLogin.historyType = 'Login';
						userHisLogin.usernameOnline = req.params.username;
						userHisLogin.dateUserOnline.date = today.getDate();
						userHisLogin.dateUserOnline.month = today.getMonth() + 1;
						userHisLogin.dateUserOnline.year = today.getFullYear();
						userHisLogin.numberUserLoginInMonth = 1;
						userHisLogin.save((err) => {
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					} else {
						uHL.numberUserLoginInMonth = uHL.numberUserLoginInMonth + 1;
						uHL.save((err) =>{
							if(err) {
								res.json({success: false, message: err});
							} else {
								res.json({success: true, message: 'Add user history success'});
							}
						});
					}
				}
			});
		}
	});

	

	//profileWithID
	//router api profile With ID of user 
	router.get('/profileWithID/:idUser', (req, res) => {
		if(!req.params.idUser) {
			res.json({success: false, message: 'User not found'});
		} else {
			userAuth.findOne({_id: req.params.idUser}, (err, user) => {
				//console.log(req.decoded.userId);
				if(err){
					res.json({ success: false, message: err });
				} else {
					if(!user){
						res.json({ success: false, message: 'User not found' });
					} else {
						res.json({ success: true, user: user });
					}
				}
			});
		}
	});

	
	router.use((req, res, next) => {
		const token = req.headers['authorization'];
		if(!token){
			res.json({ success: false, message: 'No toten provided' });
		} else {
			jwt.verify(token, config.secret, (err, decoded) => {
				if(err){
					res.json({ success: false, message: 'Toten invalid: ' + err});	
				} else {
					req.decoded = decoded;
					//console.log(req.decoded);
					//res.json({ success: false, message: 'No toten provided' });
					next();
				}
			});
		}
	}); 
	

	//router api profile of user 
	router.get('/profile', (req, res) => {
		userAuth.findOne({_id: req.decoded.userId}, (err, user) => {
			//console.log(req.decoded.userId);
			if(err){
				res.json({ success: false, message: err });
			} else {
				if(!user){
					res.json({ success: false, message: 'User not found' });
				} else {
					res.json({ success: true, user: user });
				}
			}
		});
		//res.send(req.decoded);
	});

	router.put('/createUsername', (req, res) => {
		if(!req.body.username) {
			res.json({success: false, message: 'you must provide an username'});
		} else {
			userAuth.findOne({_id : req.decoded.userId}, (err, user) => {
				if(err) {
					res.json({success: false, message: 'user authorization not found: ' + err});
				} else {
					if(user.userAuthorization.authWithBlog.create) {
						res.json({success: false, message: 'You have authorization create blog but adminstrator does not give you that right.'});
					} else {
						user.userAuthorization.username = req.body.username;
						user.userAuthorization.authWithBlog.create = true;
						user.userAuthorization.authWithBlog.edit = true;
						user.userAuthorization.authWithBlog.delete = true;
						user.save((err) => {
							if(err) {
								res.json({success: false, message: 'Create username fail : ' + err});
							} else {
								res.json({success: true, message: 'Created username. Now, you can write blog.'});
							}
						});
					}
				}
			});
		}
	});

	

	router.get('/publicProfile/:username', (req, res) => {
		if(!req.params.username) {
			res.json({success: false, message: 'No user name provided'});
		} else {
			userAuth.findOne({ 'userAuthorization.username' : req.params.username}, (err, user) => {
				if(err) {
					//return errors
					res.json({success: false, message: err});
				} else {
					if(!user) {
						//return user not found
						res.json({success: false, message: 'Database not found by username: ' + req.params.username});
					} else {
						//return user found out
						res.json({success: true, user: user});
					}
				}
			});
		}
	});

	

	router.post('/sendmail', (req, res) => {
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: 'dangduongcuong@gmail.com',
				clientId: '970404624406-0gd5lf64a0sv4norfqamkd5iddmfgccl.apps.googleusercontent.com',
				clientSecret: 'IIUt6bOFahV7lTe-VHG03-ik',
				refreshToken: '1/fxDoSxcx7FkK4kg6Jnv_241MWl_2RZkJZtpp8t3SZmE'	
			},
		});

		//content mail
		transporter.use('compile', hbs({
			//path file email
			viewPath: 'views',
			extName: '.ejs'

		}));

		var username = req.body.ten;
		var email = req.body.email;
		var password = req.body.password;


			// send mail with defined transport object
		transporter.sendMail({
			from: 'duongcuong <dangduongcuong@gmail.com>',
			to: email,
			subject: 'test nodemailer send mail',
			template: 'mail',
			context: {
				username,
				email,
				password
			}

			//if(error){
			   // console.log('send mail error: ' + error);
			//}else{
			 //  console.log('sended mail: ');
			//}

			// if you don't want to use this transport object anymore, uncomment following line
			//transporter.close(); // shut down the connection pool, no more messages
		}, function(err, response) {
			if(err){
				res.send('dang ky that bai: ' + err);
				console.log('send mail err: ' + err);
			} else {
				res.send('Dang ky thanh cong');
			}
		})
	});

	return router;
}