// Load Node modules
var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
var falaUser = require("./routes/falaUser");

//Config files
process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
console.log("Using "+process.env['NODE_CONFIG_DIR'] +" as config directory");
var config = require("config");

// Initialise Express
var app = express();

// Render static files
app.use(express.static('public'));
app.use(bodyParser.json());
app.use("/falauser", falaUser);

// Set the view engine to ejs
app.set('view engine', 'ejs');
var server = app.listen(config.get("port"), config.get("hostname"), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server running at http://' + host + ':' + port)
});

// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});