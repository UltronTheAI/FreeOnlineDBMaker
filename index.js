const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io-client');
const ioserver = require("socket.io")(server, { cors: { origin: "*" } });

const ioc2 = require('socket.io-client');

var socket = io(process.env.URL)
var cd_ = ''
var pro_socket = ioc2(process.env.OTHER)
setTimeout(function () {
    pro_socket.emit('val', cd_)
}, 4000)
pro_socket.on('val', (data) => {
    cd_ += data;
})


setInterval(() => {
    socket.emit('acd', {'r': 'localhost'})
    // console.log('okay')
}, 6000);

socket.on('acd', (data) => {
    if (data['response'] != []){
    console.log(data);}
});

app.get('/', (req, res) => {
    res.send('Welcome User...');
});

server.listen(process.env.PORT || process.env.PORT);

ioserver.on("connection", (socket) => {
    // console.log("User connected... user id = " + socket.id);
    socket.on('val', (data) => {
        socket.emit('val', data + '1')
    })
    socket.on('disconnect', () =>{

    });
    // function updatevm(data__) {
    //     vm[3] = data__;
    // }
    
});


