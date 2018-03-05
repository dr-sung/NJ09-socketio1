const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

// web socket server
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new USER connected');

    socket.on('disconnect', () => {
        console.log('USER disconnected');
    })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})