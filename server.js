var yargs = require('yargs')
	.usage('Run the server for your angular app')
	.demand('p')
	.alias('p', 'port')
	.describe('p', 'Port to serve on')
	.argv;

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var SERVE_PORT = yargs.port || 8000;


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
	res.redirect('dist/index.html');
});

app.listen(SERVE_PORT);

console.log('Server is running on ' + SERVE_PORT.toString());
