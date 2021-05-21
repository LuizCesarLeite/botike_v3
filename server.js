// Modulos essenciais
var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
var falaUser = require("./routes/falaUser");

// Arqruivos de configuração de funcionamento
process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
console.log("Using "+process.env['NODE_CONFIG_DIR'] +" as config directory");
var config = require("config");

// Go Express!
var app = express();

// Chama os arquivos estáticos
app.use(express.static('public'));
app.use(bodyParser.json());
app.use("/falauser", falaUser);

// Determina que motor de renderização é o EJS
app.set('view engine', 'ejs');
var server = app.listen(config.get("port"), config.get("hostname"), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Aplicação rodando fina em http://' + host + ':' + port)
});

// Root
app.get('/', function (req, res) {
    res.render('pages/index');
});