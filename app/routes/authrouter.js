// We will keep our routes simple for now. We will have the following routes:

// Home Page (/)
// Login Page (/login)
// Signup Page (/signup)
// Handle the POST for both login
// Handle the POST for both signup
// Profile Page (after logged in)
// app/routes.js
module.exports = (passport, app) => {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    // app.get('/', function(req, res) {
    //     res.render('index.ejs'); // load the index.ejs file
    // });
    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    // app.get('/login', function(req, res) {

    //     // render the page and pass in any flash data if it exists
    //     res.render('login.ejs', { message: req.flash('loginMessage') }); 
    // });

     // process the login form
    // app.post('/login', passport.authenticate('local-login', {
    //     // successRedirect : '/profile', // redirect to the secure profile section
    //     // failureRedirect : '/login', // redirect back to the signup page if there is an error

    //     successRedirect : '/successjson',
    //     failureRedirect : '/failurejson',

    //     failureFlash : true // allow flash messages
    // }));

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        //successRedirect : '/profile', // redirect to the secure profile section
        //failureRedirect : '/signup', // redirect back to the signup page if there is an error

        // successRedirect : '/successjson',
        // failureRedirect : '/failurejson',

        successRedirect : '/result/locallogin/success',
        failureRedirect : '/result/locallogin/fail',
        failureFlash : true // allow flash messages
    }));

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

      // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' } ));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            // successRedirect : '/profile',
            // failureRedirect : '/'
            
            // successRedirect : '/successjson',
            // failureRedirect : '/failurejson'

            successRedirect : '/result/facebook/success',
            failureRedirect : '/result/facebook/fail'
        }
    ));

    app.all('/*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });

    // successRedirect : '/result/twitterlogin/success',
    // failureRedirect : '/result/twitterlogin/fail'



    app.get('/successjson', function(req, res, next) {
        //res.send(200, { user: req.user });
        res.json({success: true, message: 'user found', user: req.user});

        //console.log('user' + req.user );
    });

    app.get('/failurejson', function(req, res) {
        //res.send(401, { message: 'hello' });
        res.json({success: false, message: 'user not auth'});
        //console.log('user fail');
    });

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                // successRedirect : '/profile',
                // failureRedirect : '/'

                // successRedirect : '/successjson',
                // failureRedirect : '/failurejson'

                successRedirect : '/result/googlelogin/success',
                failureRedirect : '/result/googlelogin/fail'
            }));

    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    // route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            // successRedirect : 'http://localhost:3000',
            // failureRedirect : '/'

            // successRedirect : '/successjson',
            // failureRedirect : '/failurejson'

            successRedirect : '/result/twitter/success',
            failureRedirect : '/result/twitter/fail'
        }));

    app.get('/result/:authName/:rsl', function(req, res) {
        if(req.params.rsl == 'success') {
            if (req.params.authName === 'local') {
                res.redirect('/checkauthlogin/' + req.params.authName + '/' + req.user.facebook.name);
            }
            if (req.params.authName === 'facebook') {
                //console.log(req.user);
                res.redirect('/checkauthlogin/' + req.params.authName + '/' + req.user._id);
                //res.redirect('https://duongcuongblog.herokuapp.com/checkauthlogin/' + authname + '/' +  req.user.facebook.name + '/' + req.user.facebook.id);
            } 
            if (req.params.authName === 'google') {
                //console.log(req.user.google.name);
                res.redirect('/checkauthlogin/' + req.params.authName + '/' + req.user._id );
                //res.redirect('https://duongcuongblog.herokuapp.com/checkauthlogin/' + authname + '/' +  req.user.google.name + '/' +  req.user.google.id);
            } 
            if(req.params.authName === 'twitter') {
                //console.log(req.user.twitter.name);
                res.redirect('/checkauthlogin/' + req.params.authName + '/' + req.user._id);
                //res.redirect('https://duongcuongblog.herokuapp.com/checkauthlogin/' + 'twitterlogin/' + req.user.twitter.displayName + '/' + req.user.twitter.id);
            }

            
            //res.json({success: true, message: 'User found', user: req.user.authname});
            //res.redirect('https://duongcuongblog.herokuapp.com/' + req.user.authname.displayName);
            //res.send(200, { success: true, message: 'User found', user: req.user });

        } 
        if(req.params.rsl == 'fail') {
            res.json({success: false, message: 'No found user'});
            //res.send(401, { message: 'fail' });
        }
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
