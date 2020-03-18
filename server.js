const express = require('express');

//create the server
const app = express();


//which port
app.listen(3000, () => {
    console.log("Listening on port 3000")
});

