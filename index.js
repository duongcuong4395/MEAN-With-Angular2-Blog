//index.js

const express = require('express');
const app = express();
const port = 10000;

const mongoose = require('mongoose');
const config = require('./config/database');

const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('Could not connet to database ' + err);
	}else{
		console.log('secret: ' + config.secret)
		console.log('Connected to database: ' + config.db);
	}
});

app.use(express.static(__dirname + '/client/dist/'))

//create route "/" (requet/response)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

//http://localhost:port
app.listen(port, () =>{
	console.log("server listen port" + port);
});