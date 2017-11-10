//index.js
//import muludes
//fast, unopinionated, minimalist web famework for node
const express = require('express');
//initiate express application
const app = express();
//create a new route object
const router = express.Router();
//create port for server listen
const port = process.env.PORT || 3000;
//node tool for mongodb
const mongoose = require('mongoose');
//mongoose config
const config = require('./config/database');
//nodejs package for file paths
const path = require('path');
//import Authentication routes
const authentication = require('./routes/authentication')(router);
const blogs = require('./routes/blogs')(router);
//parse incoming request bodies in a middleware before your handlers, available under the req.body(req:request) property
const bodyParser = require('body-parser');

const cors = require('cors');

//for upload file
var multer = require('multer');
app.use(express.static("resources"));
app.set('view engine', 'ejs');
app.set('views', './views');

//specify the folder which will contain your files, in our case ‘uploads’ and set your headers and content type
// specify the folder
app.use(express.static(path.join(__dirname, 'resources')));
// headers and content type
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// comes multer with very straight forward examples on the npm website
var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    // cb(null, './resources/')
    cb(null, './public/assets/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

//Finally, you expose the endpoint which will be attacked on the angular part
app.post("/upload", upload.array("uploads[]", 12), (req, res) => {
	if(req.files.length < 1) {
    res.json({success: false, message: 'No file choose'});
  } else {
    res.json({success: true, message: 'Number file choosen is: ' + req.files.length, namefile: req.files[0].originalname});
  }
  /*if(err) {
  	res.json({success: false, message: 'upload file err: ' + err});
  } else {  	
  	res.json({success: true, message: 'uploaded'});
  	 console.log('files', req.files);
  	res.send(req.files.originalname);
  } */
});

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
app.use(express.static(__dirname + '/public'));
app.use('/authentication', authentication);
app.use('/blogs', blogs);

//connect server to angular 2 Index.html
//create route "/" (requet/response)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

//http://localhost:port
app.listen(port, () =>{
	console.log("server listen port" + port);
});