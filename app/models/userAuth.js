//We will create our user model for the entire tutorial series. Our user will have the ability to be linked to multiple social accounts and to a local account. For local accounts, we will be keeping email and password. For the social accounts, we will be keeping their id, token, and some user information.
//You can change these fields out to be whatever you want. You can authenticate locally using username and password (passport-local actually uses username by default but we'll change that to email).



// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
//config mongoose promise
mongoose.Promise = global.Promise;
//import schema for mongoose
const Schema = mongoose.Schema;

var bcrypt   = require('bcrypt-nodejs');


//Validation
//Valid Email
let emailLengthChecker = (email) =>{
  if(!email){
    return false;
  }else{
    if (email.length < 5 || email.length > 100) {
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
  validator: emailLengthChecker, message: 'Email must be at least 5 character but no more than 100'
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

const usernameValidators = [{
      validator: usernameLengthChecker, message: 'Username must be at least 5 character but no more than 15'
    }, {
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


//valid name
let nameLengthChecker = (name) => {
    if(!name){
      return false;
    }else{
      if (name.length < 5 || name.length > 50) {
        return false;
      }else{
        return true;
      }
    }
};

let validNameChecker = (name) => {
  if(!name){
    return false;
  }else{
    //regExpression
    const regExp = new RegExp(/^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/);
    return regExp.test(name);
  }
};
const nameValidators = [
{
    validator: nameLengthChecker, message: 'Name must be at least 5 character but no more than 50'
    }, {
      validator: validNameChecker, message: 'Name must not have any special character'
    }
];

var date = new Date();
// define the schema for our user model
var userAuthSchema = new Schema({
  userAuthorization : {
    authorizationType : { type: String, required:true },
    email    :    { type: String, required: false, unique: true, validate: emailValidators },
    photo    :    { type: String, required: true },
    name     :    { type: String, required: false, validate: nameValidators },
    username :    { type: String, required: false, unique: true, validate: usernameValidators },//if( authorizationType == local)
    
    authWithBlog :  {
      create  :     { type : Boolean, default: false },
      edit    :     { type : Boolean, default: false },
      delete  :     { type : Boolean, default: false }
    },

    id        :     { type: String, required: false },//if( authorizationType != local)
    token     :     { type: String, },//if( authorizationType != local)
    password  :     { type: String, required: false, validate: passwordValidators }, //if( authorizationType == local)
    createdAt :     { 
      date  : { type : Number, min: 1, max: 31, default: date.getDate() }, 
      month : { type : Number, min: 1, max: 12, default: date.getMonth() },
      year  : { type : Number, min: date.getFullYear(), default: date.getFullYear() }
    }
  },

  // lowercase: true,

    // local            : {
    //     email: {
    //         type: String,
    //         required: true,
    //         unique: true,
    //         lowercase: true,
    //         validate: emailValidators
    //     },
    //     name: {
    //         type: String,
    //         required: true,
    //         unique: true,
    //         lowercase: true,
    //         validate: usernameValidators
    //     },
    //     password: {
    //         type: String,
    //         required: true,
    //         validate: passwordValidators
    //     }, 
    //     image: {
    //         type: String
    //     }
    // },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        photo        : String     
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        name         : String,
        photo        : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        photo        : String
    }

});

/*// methods ======================
// generating a hash
userAuthSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userAuthSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};*/

//encrypt by hash(password)
//Schema middleware to encrypt password
userAuthSchema.pre('save', function(next) {
  //ensure password is new or modified applying encryption
  if(!this.isModified('userAuthorization.password')) return next();

  //bcrypt hash password
  //apply encryption
  bcrypt.hash(this.userAuthorization.password, null, null, (err, hash) => {
    //ensure no errors
    if(err) return next(err);
    //apply encryption to password
    this.userAuthorization.password = hash;
    //exit middleware
    next();
  });
});

//compare password to encrypted password upon login
userAuthSchema.methods.comparePassword = function(password) {
  //will return true or false
  //return compare of login password to password in database (true/false)
  return bcrypt.compareSync(password, this.userAuthorization.password);
}


// create the model for users and expose it to our app
module.exports = mongoose.model('UserAuth', userAuthSchema);