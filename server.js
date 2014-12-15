var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
	res.redirect('dist/index.html');
});

app.listen(8000);
