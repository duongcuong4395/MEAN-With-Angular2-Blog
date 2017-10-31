const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

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
				//check password provided
				if(!req.body.password){
					res.json({ success: false, message: 'you must provide an password' });
				}else{
					//User from models/user
					//create new user object and apply user input(req.body)
					let user = new User({
						email : req.body.email,
						username : req.body.username,
						password : req.body.password
					});
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
										if (err.errors.username) {
											res.json({ success: false, message: err.errors.username.message});
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
		}
	});

	//route check email of user is available for register
	router.get('/checkEmail/:email', (req, res) => {
		//check email was provided in parameters
		if(!req.params.email){
			res.json({ success: false, message: 'Email was not provided!'});
		} else {
			//find email in database
			User.findOne({email: req.params.email}, (err, user) => {
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
			User.findOne({username: req.params.username}, (err, user) => {
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

	router.post('/login', (req, res) => {
		//check username was provided in parameters
		if(!req.body.username) {
			res.json({ success: false, message: 'Username was not provided!'});
		} else {
			//check password was provided in parameters
			if(!req.body.password) {
				res.json({ success: false, message: 'password was not provided!'});
			} else {
				User.findOne({username: req.body.username}, (err, user) => {
					//check connection error was found
					if(err) {
						res.json({ success: false, message: err });
					} else {
						if(!user) {
							//username was not found
							res.json({ success: false, message: 'Username not found' });
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
								const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' });
								res.json({ success: true, message: 'password valid - (success)', token: token, user: {username: user.username} });
							}
						}
					}
				});
				
			}
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
					//res.json({ success: false, message: 'No toten provided' });
					next();
				}
			});
		}
	}); 

	router.get('/profile', (req, res) => {
		User.findOne({_id: req.decoded.userId}).select('username email').exec((err, user) => {
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
	return router;
}