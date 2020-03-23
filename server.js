const express   = require('express');
const uuid      = require('uuid/v4');
const session   = require('express-session');
const FileStore = require('session-file-store')(session);


//create the server
const app = express();


//add and configure middleware
app.use(session({
    genid: (req) => {
        console.log('Inside the session middleware');
        console.log(req.sessionID);
        return uuid();
    },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true

}))


//HOme page route
app.get('/', (req,res) => { 
    console.log(`Inside the homepage callback function`);
    console.log(req.sessionID);
    res.send('You hit the home Page');  
});


//which port
app.listen(3000, () => {
    console.log("Listening on port 3000")
});

