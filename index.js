var express = require('express');
var fallback = require('express-history-api-fallback')

var app = express();
var server = require('http').Server(app);

var root = __dirname + '/public'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))

server.listen(5000);

