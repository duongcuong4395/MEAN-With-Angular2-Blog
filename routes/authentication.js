const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user');

//create API
module.exports = (router) => {

	//add user
	router.post('/register', (req, res) => {


		if(!req.body.email){
			res.json({ success: false, message: 'you must provide an email' });
		}else{
			if(!req.body.username){
				res.json({ success: false, message: 'you must provide an usename' });
			}else{
				if(!req.body.password){
					res.json({ success: false, message: 'you must provide an password' });
				}else{
					//User from models/user
					let user = new User({
						email : req.body.email,
						username : req.body.username,
						password : req.body.password
					});
					user.save((err)=>{
						//error happen
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


	router.get('/checkEmail/:email', (req, res) => {
		if(!req.params.email){
			res.json({ success: false, message: 'Email was not provided!'});
		} else {
			User.findOne({email: req.params.email}, (err, user) => {
				if(err) {
					res.json({ success: false, message: err});
				} else {
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

	return router;
}