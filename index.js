const express = require("express");
const res = require("express/lib/response");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });


// var vm = {};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web/index.html');
});


app.get('/console', (req, res) => {
    res.sendFile(__dirname + '/web/console.html');
});


// app.get('/api', (req, res) => {
//     res.send(data(req.url));
// });

app.get('/GetUid', (req, res) => {
    res.sendFile(__dirname + '/web/uid.html');
});



server.listen(process.env.PORT || 5000);

io.on("connection", (socket) => {
    console.log("User connected... user id = " + socket.id);

    socket.emit('get-uid', socket.id);

    // setInterval(() => {
        
    // }, 400);
    socket.on('read', (data) => {
        console.log(data);
        socket.broadcast.emit('read', data);
    });
    socket.on('write', (data) => {
        console.log(data);
        socket.broadcast.emit('write', data);
    });
    socket.on('delete', (data) => {
        console.log(data);
        socket.broadcast.emit('delete', data);
    });
    socket.on('d', (data) => {
        console.log(data);
        socket.broadcast.emit('d', data);
    });

    socket.on('disconnect', () =>{
        
    });
    function updatevm(data__) {
        vm[3] = data__;
    }
    
});
