// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '188750251686814', // your App ID
        'clientSecret'  : 'abc31b762a936dac5c1a2e78d08fb278', // your App Secret
        'callbackURL'   :  'https://duongcuongblog.herokuapp.com/auth/facebook/callback'  
        //'http://localhost:3000/auth/facebook/callback'
    },
    

    'twitterAuth' : {
        'consumerKey'       : '0f7BDB3nZEnemwFcP0WoNtywY',
        'consumerSecret'    : 'WF1vi4z3XZ67d4ZQOsljohwgfuMsMat1D5LPZ85mx14uhRa6nl',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '619378895089-9sha3ngfu63jjc6rnlu60qqqr92t49tq.apps.googleusercontent.com',
        'clientSecret'  : '4Rq6QdVjKg0A74CRyXwkCb0e',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
