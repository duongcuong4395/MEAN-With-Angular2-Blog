//index.js


//import muludes

// Express is the framework.
// Ejs is the templating engine.
// Mongoose is object modeling for our MongoDB database.
// Passport stuff will help us authenticating with different methods.
// Connect-flash allows for passing session flashdata messages.
// Bcrypt-nodejs gives us the ability to hash the password.

//fast, unopinionated, minimalist web famework for node
const express = require('express');
const app = express();      //initiate express application        
const router = express.Router();        //create a new route object
const port = process.env.PORT || 3000;//create port for server listen
const mongoose = require('mongoose');//node tool for mongodb
const config = require('./app/config/database');//mongoose config
const path = require('path');//nodejs package for file paths

const bodyParser = require('body-parser');//parse incoming request bodies in a middleware before your handlers, available under the req.body(req:request) property
const cors = require('cors');
const multer = require('multer');


var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

const authentication = require('./app/routes/authentication')(router);//import Authentication routes
const blogs = require('./app/routes/blogs')(router);//import Authentication routes
//const userAuth = require('./app/routes/authrouter')(router, passport);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

 require('./app/config/passport')(passport); // pass passport for configuration
 require('./app/routes/authrouter.js')(passport, app);
 //require('./app/routes/authrouter.js')(router, passport); // load our routes and pass in our app and fully configured passport




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

app.use(express.static("resources"));
app.set('view engine', 'ejs'); //config view engine is ejs
app.set('views', './views'); //all file view.ejs derectory is /views

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.use('/authentication', authentication);
app.use('/blogs', blogs);

//specify the folder which will contain your files, in our case ‘uploads’ and set your headers and content type
// specify the folder
app.use(express.static(path.join(__dirname, 'resources')));

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
});

//middleware for cors
app.use(cors({
	origin:'http://localhost:4200'
}));




app.use(express.static(__dirname + '/public')); //provide static directory for front-ent
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

//http://localhost:port
app.listen(port, () =>{
	console.log("server listen port" + port);
});


const socketsPort = 1995;
const socket = require("socket.io").listen(socketsPort).sockets;

var userArray = [];
var userOnline = [];
var historyActive = [];

socket.on("connection", (client) => {
    console.log(client.id + " is connected.");
    client.emit("connected", { clientId: client.id });

    //server get request login
    client.on('client-login', (username) => {
        client.username = username;
        socket.emit('server-send-username', {username: client.username});
    });

    client.on('client-add-user-online', (dataClientSend) => {
      if(userArray.indexOf(dataClientSend.username) >=0 ){
        client.emit('server-send-user-already-loggin');
      } else {
        userArray.push(dataClientSend.username);

        userOnline.push({username: dataClientSend.username, photo: dataClientSend.photo});
        socket.emit('server-send-users-online', {usersOnline: userOnline});
      }
    });

    //server get request logout from user
    client.on('client-logout', (dataClientSend) => {
          userArray.splice(
            userArray.indexOf(dataClientSend.username), 1
          );
          userOnline.splice(
            userOnline.indexOf({username: dataClientSend.usernameLogout}), 1
          );
          //send users online to all user login
          
          socket.emit('server-send-users-online', userOnline);
      console.log('user online after logout' + dataClientSend.usernameLogout);
    });

    client.on('client-like-blog-success', (dataClientSend) => {
      historyActive.unshift({photo: dataClientSend.photo, username: dataClientSend.username, userActive: '' + ' had been like blog ', blog: dataClientSend.titleBlog});
      socket.emit('server-send-all-active', {allActive: historyActive});
    });

    client.on('client-dislike-blog-success', (dataClientSend) => {
      historyActive.unshift({photo: dataClientSend.photo, username: dataClientSend.username, userActive: '' + ' had been dislike blog ', blog: dataClientSend.titleBlog});
      socket.emit('server-send-all-active', {allActive: historyActive});
    });

    //when client emit to server, request server apply client create blog
    client.on('client-write-blog-success', (dataClientSend) => {
      //insert item at the begin array
      historyActive.unshift({photo: dataClientSend.photo, username: dataClientSend.creatorBlog, userActive: '' + ' had been written blog ', blog: dataClientSend.titleBlog});
      //server send all users active
      socket.emit('server-send-all-active', {allActive: historyActive});
      //server response to to all the other clients except the newly created connection  
      //socket.broadcast.emit will send the message to all the other clients except the newly created connection
      client.broadcast.emit('server-response-client-write-blog-success', {photo: dataClientSend.photo, creatorBlog: dataClientSend.creatorBlog, message: 'has just finished writing the blog:', titleBlog: dataClientSend.titleBlog});
    });

    //when client emit to server, request server apply client edit blog
    client.on('client-edit-blog-success', (dataClientSend) => {
      if(dataClientSend.oldTitleBlog == dataClientSend.newTitleBlog){
        historyActive.unshift({photo: dataClientSend.photo, username: dataClientSend.creatorBlog, userActive: '' + ' had been edited blog ', blog: dataClientSend.oldTitleBlog});
      } else {
        historyActive.unshift({photo: dataClientSend.photo, username: dataClientSend.creatorBlog, userActive: '' + ' had been changed blog ' + dataClientSend.oldTitleBlog + ' to ', blog: dataClientSend.newTitleBlog});  
      }
      
      //server send all users active
      socket.emit('server-send-all-active', {allActive: historyActive});
      //server response to to all the other clients except the newly created connection  
      //socket.broadcast.emit will send the message to all the other clients except the newly created connection
      client.broadcast.emit('server-response-client-edit-blog-success', {creatorBlog: dataClientSend.creatorBlog, message: 'has just finished edit the blog:', oldTitleBlog: dataClientSend.oldTitleBlog, newTitleBlog: dataClientSend.newTitleBlog});
      
    });

    //when client emit to server, request server apply client delete blog
    client.on('client-delete-blog-success', (dataClientSend) => {
      historyActive.unshift({photo: dataClientSend.photo, username: dataClientSend.creatorBlog, userActive: '' + ' had been deleted blog ', blog: dataClientSend.titleBlog});
      //server send all users active
      socket.emit('server-send-all-active', {allActive: historyActive});
      //server response to to all the other clients except the newly created connection  
      //socket.broadcast.emit will send the message to all the other clients except the newly created connection
      client.broadcast.emit('server-response-client-delete-blog-success', {creatorBlog: dataClientSend.creatorBlog, message: 'has just finished delete blog:', titleBlog: dataClientSend.titleBlog});
    });

    socket.emit('server-send-username', {username: client.username});
    socket.emit('server-send-users-online', {usersOnline: userOnline});
    socket.emit('server-send-all-active', {allActive: historyActive});

    client.on("send_message", (message) => {
        console.log(client.id + ":)" + message);
        sockets.emit("new_message", { from: client.id, text: message });
    });
});