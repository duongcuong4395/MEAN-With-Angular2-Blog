//index.js
//import muludes
//fast, unopinionated, minimalist web famework for node
const express = require('express');
//initiate express application
const app = express();
//create a new route object
const router = express.Router();
//create port for server listen
const port = 3000;
//node tool for mongodb
const mongoose = require('mongoose');
//mongoose config
const config = require('./config/database');
//nodejs package for file paths
const path = require('path');
//import Authentication routes
const authentication = require('./routes/authentication')(router);
//parse incoming request bodies in a middleware before your handlers, available under the req.body(req:request) property
const bodyParser = require('body-parser');

const cors = require('cors');

//database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('Could not connet to database ' + err);
	}else{
		console.log('secret: ' + config.secret)
		console.log('Connected to database: ' + config.db);
	}
});

//middleware
//var corsOptions = {
//  origin: 'http://example.com',
//  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
//}
app.use(cors({
	origin:'http://localhost:4200'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//provide static directory for front-ent
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication);

//connect server to angular 2 Index.html
//create route "/" (requet/response)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

//http://localhost:port
app.listen(port, () =>{
	console.log("server listen port" + port);
});