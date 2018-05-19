
// set up ======================================================================
var express = require('express');
var app = express();                                            // create our a$
var port = process.env.PORT || 8040;                            // set the port


app.use(express.static(__dirname + '/public'));                 // set the stat$


// routes ======================================================================
//require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
