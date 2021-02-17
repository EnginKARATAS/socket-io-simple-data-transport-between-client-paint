var express         = require('express');
var app             = express();
var server          = require('http').Server(app);
var io              = require('socket.io')(server);
app.use(express.static('public'))

io.sockets.on('connection', function (socket) {
        console.log(socket);
})

server.listen(3000, function(){
    console.log('listening on *:3000');
});