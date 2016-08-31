var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 7000

app.use(express.static('public'));
server.listen(port);

console.log(
  '\n' +
  'Server is running http://localhost:' + port + '\n' +
  'To stop server, press Ctrl+C\n'
)