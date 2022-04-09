const express = require("express");
// const res = require("express/lib/response");
const app = express();
const fs = require('fs')
const server = require("http").createServer(app);
const ioc = require('socket.io-client');
const io = require("socket.io")(server, { cors: { origin: "*" } });


// var vm = {};
// var uk = '';
var exr = 0;
var sec = 0;
var uk_id = '';
var uk_id2 = '';
var gl = 9;
// var nv_ = [];

function makeid() {
    gl += 1;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < gl; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
// console.log(makeid())
// function sleep(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

function security(vat) {
    
    vat = String(vat);
    
    var test2 = 0, e = 'Error You Can Not Save Password, Email, Link, Number, Payment Card Number In Thi\'s DB';

    if (vat.indexOf('@') == -1) {
        if (vat.indexOf('http:') == -1) {
            if (vat.indexOf('https:') == -1) {
                if (vat.indexOf('.') == -1) {
                    if (vat.indexOf('gmail') == -1) {
                        if (vat.indexOf('0') == -1) {
                            if (vat.indexOf('1') == -1) {
                                if (vat.indexOf('2') == -1) {
                                    if (vat.indexOf('3') == -1) {
                                        if (vat.indexOf('4') == -1) {
                                            if (vat.indexOf('5') == -1) {
                                                if (vat.indexOf('6') == -1) {
                                                    if (vat.indexOf('7') == -1) {
                                                        if (vat.indexOf('8') == -1) {
                                                            if (vat.indexOf('9') == -1) {
                                                                if (vat.indexOf('password') == -1) {
    /* security of thi's DataBase */                                test2 += 1;  
                                                                } else { uk_id = e }
                                                            } else { uk_id = e }
                                                        } else { uk_id = e }
                                                    } else { uk_id = e }
                                                } else { uk_id = e }
                                            } else { uk_id = e }
                                        } else { uk_id = e }
                                    } else { uk_id = e }
                                } else { uk_id = e }
                            } else { uk_id = e }
                        } else { uk_id = e }
                    } else { uk_id = e }
                } else { uk_id = e }
            } else { uk_id = e }
        } else { uk_id = e }
    } else { uk_id = e; }
    // delete e
    // console.log(uk_id)
    return test2;
}

function ap (d) {
    // uk_id = '';
    d = d.split("");
    var t = '';
    for (let i = 5; i < d.length; i++) {
        t += d[i];
    }
    t = t.replaceAll('%25', '%')
    var jdd_ = t.split('%&%')
    // jdd_[1] = jdd_[1].replaceAll('DElete', 'delete')
    // var id__ = '';
    if (exr == 0) {
        uk_id = '';
        uk_id2 = '';
        // var u_ = '';
        var mode = jdd_[1];
        var num = jdd_[0];
        var vat = jdd_[2];
        var sc = ioc('https://free-online-db-maker.herokuapp.com');
        sc.on ('get-uid', (uid_) => {
                // id__ = id_;

                uk_id = uid_;
                // uk_id2 = uid_;


                if (mode == 'read') {
                    // console.log(jdd_)
                    sc.emit('read', [num, vat, uid_]);
                }
                var e = 'Error You Can Not Save Password, Email, Link, Number, Payment Card Number In Thi\'s DB', te = jdd_[3], test2 = 0;
                if (mode == 'write') {
                    // console.log(jdd_)
                    
                    var vat_check = security(vat);
                    var te_check = security(te);
                    
                    var all = vat_check + te_check;
                    
                    if (all == 2) {
                        sc.emit('write', [num, vat, uid_, jdd_[3]]);
                    }
                    else {
                        uk_id = e;
                    }
                }
                if (mode == 'DElete') {
                    // console.log(jdd_)
                    sc.emit('delete', [num, vat, uid_]);
                }
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
        // if (uk_id2 == jdd_[0]) {
            return uk_id;
        // }
    }
}

setInterval( () => {
    if (exr == 1) { 
        sec += 1;
        if(sec > 6) {
            sec = 0;
            exr = 0;
        }
    }
}, 500)

app.get('/api', (req, res) => {
    // var iuiid = ap (req.url);
    // var myuid = '';
    res.send(ap(req.url));
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web/index.html');
    // const fs = require('fs')

// const content = 'Some content!'


});


app.get('/console', (req, res) => {
    res.sendFile(__dirname + '/web/console.html');
});
app.get('/agree', (req, res) => {
    res.sendFile(__dirname + '/web/agree.html');
});


// app.get('/api', (req, res) => {
//     res.send(data(req.url));
// });

app.get('/GetUid', (req, res) => {
    var ru = req.url.split('');
    var fru = '';
    for (var i = 8; i < ru.length; i++) {
        fru += ru[i];
    }
    delete ru;
    fs.readFile(__dirname + '/f.json', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        else {
            data = JSON.parse(data);
            if (data['nv_'].indexOf(fru) != -1) {
                res.sendFile(__dirname + '/web/uid.html');
            }
            else {
                res.send(404)
            }
        }
    });

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
        // uk = data[1];
        io.to(data[0]).emit('read', [data[1], data[2]]);
    });
    socket.on('write', (data) => {
        // console.log(data);
        // socket.broadcast.emit('write', data);
        // console.log(data)
        var vat_check = security(data[1]);
        // var e = 'Error You Can Not Save Password, Email, Link, Number, Payment Card Number In Thi\'s DB';
        var te_check = security(data[3]);
                    
        var all = vat_check + te_check;
        console.log(all)
                    
        if (all == 2) {
            io.to(data[0]).emit('write', [data[1], data[2], data[3]]);
        }
        else {
            io.to(data[2]).emit('d', 'Error You Can Not Save Password, Email, Link, Number, Payment Card Number In Thi\'s DB')
        }
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
    socket.on('agree', (data1) => {
        data1 = String(data1)
        if (data1 != null && data1 != undefined && data1 != '') {
            fs.readFile(__dirname + '/f.json', 'utf8' , (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                else {
                    if (String(data).indexOf(data1) == -1) {
                        data = JSON.parse(String(data))
                        // console.log(data, data1); 
                        // console.log(nv_)
                        // data = json.parse(String(data));
                        var u_n_id = makeid();
                        var nd_ = new Date();
                        data[data1] = {"start": [nd_.getUTCFullYear(), nd_.getMonth(), nd_.getDay(), nd_.getHours(), nd_.getMinutes(), nd_.getSeconds()], "uid": u_n_id}
                        data['nv_'].push(u_n_id)
                        data = JSON.stringify(data);
                        // nv_.push(data1)
                        fs.writeFile(__dirname + '/f.json', data, err => {
                            if (err) {
                                console.error(err)
                                socket.emit('d', null);
                                return
                            }
                            else {
                                // res.send('okay')
                                // code
                                // setTimeout(() => {
                                    // console.log(data)
                                socket.emit('d', u_n_id);
                                // }, 2000);
                            }
                            //file written successfully
                        })
                    } else {
                        socket.emit('d', null);
                    }
                } 
            })
        } else {
            socket.emit('d', null);
        }
//   console.log(data)
        // res.send(data);
})
    // });

    socket.on('disconnect', () =>{
        
    });
    // function updatevm(data__) {
    //     vm[3] = data__;
    // }
    
});
