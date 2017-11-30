const mongoose = require('mongoose');
//config mongoose promise
mongoose.Promise = global.Promise;
//import schema for mongoose
const Schema = mongoose.Schema;

var date = new Date();
const historySchema = new Schema({

	usernameOnline : { type: String },
	historyType : { type: String},
	dateUserOnline : {
		date  : { type : Number, min: 1, max: 31, default: date.getDate() }, 
    	month : { type : Number, min: 1, max: 12, default: date.getMonth() },
    	year  : { type : Number, min: date.getFullYear(), default: date.getFullYear() }
	},
	numberUserLoginInMonth : { type: Number, min: 0, default: 0},
	numberUserWriteBlogInMonth : { type: Number, min: 0, default: 0},
	numberUserCommentBlogInMonth : { type: Number, min: 0, default: 0},
	numberUserLikeOrDislike : {
		numberUserLikeBlogInMonth : { type: Number, min: 0, default: 0},
		numberUserDislikeBlogInMonth : { type: Number, min: 0, default: 0}
	}
});

module.exports = mongoose.model('History', historySchema);