const express = require("express");
const res = require("express/lib/response");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const ioc = require('socket.io-client');


// var vm = {};


var exr = 0;
var uk_id = '';

// function sleep(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

function ap (d) {
    // uk_id = '';
    d = d.split("");
    var t = '';
    for (let i = 5; i < d.length; i++) {
        t += d[i];
    }
    // var id__ = '';
    if (exr == 0) {
        uk_id = '';
        var u_ = '';
        var sc = ioc('https://5000-ultrontheai-acebuilds-b4nxmy2fvou.ws-us38.gitpod.io');
        sc.on ('get-uid', (id_) => {
            // id__ = id_;

            sc.emit('read', [t, 'None', id_]);
            
            uk_id = id_;

            // sc.disconnect();
            // delete id__;
            // res.send(id__);
        });
        // var u_ = '';
        // while (1) {
        //     sc.on('d', (data) => {
        //         u_ = data;
        //     });
        //     if (u_ != '') {
        //         break;
        //     }
        // }
        // sleep (800);
        exr= 1;
        return uk_id;
    }
    if(exr == 1) {
        exr = 0;
        return uk_id;
    }
}

app.get('/api', (req, res) => {
    // var iuiid = ap (req.url);
    // var myuid = '';
    res.send(ap(req.url));
});

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
        // console.log(data);
        // socket.broadcast.emit('read', data);
        io.to(data[0]).emit('read', [data[1], data[2]]);
    });
    socket.on('write', (data) => {
        // console.log(data);
        // socket.broadcast.emit('write', data);
        io.to(data[0]).emit('write', [data[1], data[2], data[3]]);
    });
    socket.on('delete', (data) => {
        // console.log(data);
        // socket.broadcast.emit('delete', data);
        io.to(data[0]).emit('delete', [data[1], data[2]]);
    });
    socket.on('d', (data) => {
        // console.log(data);
        if (data[0] != uk_id) {
            io.to(data[0]).emit('d', data[1]);
        }
        if (data[0] == uk_id) {
            uk_id = data[1];
        }
        // socket.broadcast.emit('d', data);
    });

    socket.on('disconnect', () =>{
        
    });
    // function updatevm(data__) {
    //     vm[3] = data__;
    // }
    
});
