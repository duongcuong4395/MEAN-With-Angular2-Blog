const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/user');

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
						if(err){
							//check doupli key
							if(err.code === 11000){
								res.json({ success: false, message: 'username or email already exits'});
							}else{
								//check validation
								if (err.errors) {
									//check err email
									if (err.errors.email) {
										res.json({ success: false, message: err.errors.email.message});
									} else {
										if (err.errors.username) {
											res.json({ success: false, message: err.errors.username.message});
										} else {
											if(err.errors.password){
												res.json({ success: false, message: err.errors.password.message});
											} else {
												res.json({ success: false, message: err});
											}
										}
									}
								} else {
									res.json({ success: false, message: 'Could not save user. err:' ,  err});
								}
							}
						}else{
							res.json({ success: true, message: 'User saved!'});
						}
					});
				}
			}
		}
	});

	return router;
}