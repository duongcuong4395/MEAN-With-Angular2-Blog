//blog.js
//user.js
const mongoose = require('mongoose');
//config mongoose promise
mongoose.Promise = global.Promise;
//import schema for mongoose
const Schema = mongoose.Schema;


//Validation
//Valid title
let titleLengthChecker = (title) =>{
  if(!title){
    return false;
  }else{
    if (title.length < 5 || title.length > 50) {
      return false;
    }else{
      return true;
    }
  }
};

let alphaNumericTitleChecker = (title) =>{
  if(!title){
    return false;
  }else{
    //regExpression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(title);
  }
};

const titleValidators = [
{
  validator: titleLengthChecker, message: 'Title must be at least 5 character but no more than 50'
},
{
  validator: alphaNumericTitleChecker, message: 'Title must be alphaNumeric'
}
];

//valid body
let bodyLengthChecker = (body) => {
    if(!body){
      return false;
    }else{
      if (body.length < 5 || body.length > 500) {
        return false;
      }else{
        return true;
      }
    }
};

const bodyValidators = [
{
  validator: bodyLengthChecker, message: 'body must be at least 5 characters but no more than 500'
}
];

//valid comment
let commentLengthChecker = (comment) => {
    if(!comment){
      return false;
    }else{
      if (comment.length < 8 || comment.length > 200) {
        return false;
      }else{
        return true;
      }
    }
};

const commentValidators = [
{
  validator: commentLengthChecker, message: 'Comment must be at least 8 characters but no more than 200'
}
];

var date = new Date();
//Blog model defination
const blogSchema = new Schema({
	title: {  type: String, required: true, validate: titleValidators },
	body: {  type: String, required: true, validate: bodyValidators },
	createdBy: { type: String },
  avatarPost: { type: String },
	createdAt: {
    date  : { type : Number, min: 1, max: 31, default: date.getDate() }, 
    month : { type : Number, min: 1, max: 12, default: date.getMonth() },
    year  : { type : Number, min: date.getFullYear(), default: date.getFullYear() }
  },
	likes: {  type: Number, default: 0  },
	likedBy: { type: Array },
	dislikes: {  type: Number, default: 0  },
	dislikedBy: { type: Array },
	comments: [ {
			comment: { 
				type: String,
				validate: commentValidators
			},
			commentator: { type:String }
		}
	]
});


//exports module/Schema
module.exports = mongoose.model('Blog', blogSchema);