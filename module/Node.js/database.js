const io = require('socket.io-client');

const socket = io("https://free-online-db-maker.herokuapp.com");
var jd = JSON.parse("{\"method\": \"read\", \"var\": \"None\", \"text\": \"None\", \"uid\": \"None\"}");
socket.on('connection');

        var uid = '';
socket.on('get-uid', (d) => { uid = d;});
socket.on('read', (data) => {
    console.log(data);

    // exit();
});
socket.on('d', (res) => {
    // var d1 = res[0];
    // var d2 = res[1];
    // if (String(d1).replaceAll(' ', '') == uid) {
    //     console.log(d2);
        
        // exit();
    // }
});
var jdd = jd;
        var num = jdd.uid;
        var vat = jdd.var;
        var mode = jdd.method;
        // localStorage.setItem('jk', [mode, vat, jdd.text, num]);

        if (mode == 'read') {
        socket.emit('read', [num, vat, uid]);
        // exit();
        }
        if (mode == 'write') {
        socket.emit('write', [num, vat, uid, jdd.text]);
        }
        if (mode == 'delete') {
            socket.emit('delete', [num, vat, uid]);
            }
  
        // alert(jd)
        }
