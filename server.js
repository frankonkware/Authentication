const express = require('express');

//create the server
const app = express();



//HOme page route
app.get('/', function(req,res){
    res.send("You just Hit the home page");
});


//which port
app.listen(3000, () => {
    console.log("Listening on port 3000")
});

