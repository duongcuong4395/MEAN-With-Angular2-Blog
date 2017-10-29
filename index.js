//index.js

const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

const mongoose = require('mongoose');
const config = require('./config/database');

const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('Could not connet to database ' + err);
	}else{
		console.log('secret: ' + config.secret)
		console.log('Connected to database: ' + config.db);
	}
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication);

//create route "/" (requet/response)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//http://localhost:port
app.listen(port, () =>{
	console.log("server listen port" + port);
});