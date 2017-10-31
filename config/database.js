//database.js
//crypto: provides cryptographic function (open ssl's hash, hmac, cipher, decipher, sign and verify)
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	//database uri and database name
	uri: 'mongodb://localhost:27017/mean-angular-2-blog',
	//create ecret
	secret: crypto,
	db: 'mean-angular-2-blog'
}