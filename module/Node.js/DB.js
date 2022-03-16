const io = require('socket.io-client');

const socket = io("https://5000-ultrontheai-acebuilds-b4nxmy2fvou.ws-us34.gitpod.io");

const fs = require('fs');
const { exit } = require('process');

const prompt = require('prompt-sync')();

// const num = prompt('Enter a number: ');

var uid = '';
socket.on('get-uid', (d) => { uid = d;
    fs.readFile('querry.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        // console.log(data)
        var jdd = JSON.parse(data);
        var num = jdd.uid;
        var vat = jdd.var;
        var mode = jdd.method;

        if (mode == 'read') {
        socket.emit('read', [num, vat, uid]);
        // exit();
        }
        if (mode == 'write') {
        socket.emit('write', [num, vat, uid, jdd.text]);
        }
      }) 
    });

socket.on('read', (data) => {
    console.log(data);
    exit();
});
socket.on('d', (res) => {
    var d1 = res[0];
    var d2 = res[1];
    if (String(d1).replaceAll(' ', '') == uid) {
        console.log(d2);
        exit();
    }
});