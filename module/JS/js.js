// const io = require('socket.io-client');

const socket = io("https://free-online-db-maker.herokuapp.com");

// const fs = require('fs');
// const { exit } = require('process');

function DBRES(jd_) {
    // var jdd = {
    //     "method": "read",
    //     "var": "Data",
    //     "text": "Hello",
    //     "uid": "GPDSK3XlFG0BoKMkAAAB"
    // };
    var jdd = jd_;
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
}
}

// const prompt = require('prompt-sync')();

// const num = prompt('Enter a number: ');

var uid = '';
socket.on('get-uid', (d) => { uid = d;
    // fs.readFile('querry.json', 'utf8' , (err, data) => {
    //     if (err) {
    //       console.error(err)
    //       return
    //     }
        // console.log(data)
        var jdd = {
                    "method": "read",
                    "var": "Data",
                    "text": "Hello",
                    "uid": "GPDSK3XlFG0BoKMkAAAB"
                };
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
    //   }) 
    });

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
