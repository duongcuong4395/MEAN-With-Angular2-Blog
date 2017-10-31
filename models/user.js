//user.js
const mongoose = require('mongoose');
//config mongoose promise
mongoose.Promise = global.Promise;
//import schema for mongoose
const Schema = mongoose.Schema;

//hash
//native js bcrypt library for node js
const bcrypt = require('bcrypt-nodejs');
//Validation
//Valid Email
let emailLengthChecker = (email) =>{
  if(!email){
    return false;
  }else{
    if (email.length < 5 || email.length > 30) {
      return false;
    }else{
      return true;
    }
  }
};

let validEmailChecker = (email) =>{
  if(!email){
    return false;
  }else{
    //regExpression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }
};

const emailValidators = [
{
  validator: emailLengthChecker, message: 'Email must be at least 5 character but no more than 30'
},
{
  validator: validEmailChecker, message: 'Must be a valid Email'
}
];

//valid username
let usernameLengthChecker = (username) => {
    if(!username){
      return false;
    }else{
      if (username.length < 5 || username.length > 15) {
        return false;
      }else{
        return true;
      }
    }
};

let validUsernameChecker = (username) => {
  if(!username){
    return false;
  }else{
    //regExpression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }
};

const usernameValidators = [
{
  validator: usernameLengthChecker, message: 'Username must be at least 5 character but no more than 15'
},
{
  validator: validUsernameChecker, message: 'Username must not have any special character'
}
];

//valid password
let passwordLengthChecker = (password) => {
    if(!password){
      return false;
    }else{
      if (password.length < 8 || password.length > 30) {
        return false;
      }else{
        return true;
      }
    }
};

let validPasswordChecker = (password) => {
  if(!password){
    return false;
  }else{
    //regExpression
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    return regExp.test(password);
  }
};

const passwordValidators = [
{
  validator: passwordLengthChecker, message: 'Password must be at least 8 character but no more than 30'
},
{
  validator: validPasswordChecker, message: 'Password must have at least upercase, lowercase, special character, and number'
}
];

const userSchema = new Schema({
  email: {
  	type: String,
  	required: true,
  	unique: true,
  	lowercase: true,
    validate: emailValidators
  },
  username: {
  	type: String,
  	required: true,
  	unique: true,
  	lowercase: true,
    validate: usernameValidators
  },
  password: {
  	type: String,
  	required: true,
    validate: passwordValidators
  }
});

//encrypt by hash(password)
//Schema middleware to encrypt password
userSchema.pre('save', function(next) {
  //ensure password is new or modified applying encryption
  if(!this.isModified('password')) return next();

  //bcrypt hash password
  //apply encryption
  bcrypt.hash(this.password, null, null, (err, hash) => {
    //ensure no errors
    if(err) return next(err);
    //apply encryption to password
    this.password = hash;
    //exit middleware
    next();
  });
});

//compare password to encrypted password upon login
userSchema.methods.comparePassword = function(password) {
  //will return true or false
  //return compare of login password to password in database (true/false)
  return bcrypt.compareSync(password, this.password);
}

//exports module/Schema
module.exports = mongoose.model('User', userSchema);