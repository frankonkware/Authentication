const express = require('express');
const uuid    = require('uuid/v4');
const session = require('express-session');


//create the server
const app = express();


//add and configure middleware
app.use(session({
    genid: (req) => {
        console.log('Inside the session middleware')
    }
}))

//HOme page route
app.get('/', function(req,res){
    console.log(req);
    const uniqueId = uuid();    
    res.send(`Home page hit. Recieved the unique id: ${uniqueId}`);
});


//which port
app.listen(3000, () => {
    console.log("Listening on port 3000")
});

