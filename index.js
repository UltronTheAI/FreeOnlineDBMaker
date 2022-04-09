socket.on('agree', (data1) => {
        data1 = String(data1)
        if (data1 != null && data1 != undefined && data1 != '') {
            fs.readFile(__dirname + '/f.json', 'utf8' , (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                else {
                    if (Strint(data).indexOf(data1) == -1) { 
                        data = json.load(data);
                        data[data1] = {"start": [0, 0, 0, 0, 0, 0], "end": [0, 0, 0, 0, 0, 0]}
                        data = json.stringify(data);
                        nv_.push(data1)
                        fs.writeFile(__dirname + '/f.json', data, err => {
                            if (err) {
                                console.error(err)
                                socket.emit('access', 'error');
                                return
                            }
                            else {
                                // res.send('okay')
                                // code
                                socket.emit('access', data1);
                            }
                            //file written successfully
                        })
                    }
                }
            })
        } else {
            socket.emit('access', 'error');
        }
//   console.log(data)
        // res.send(data);
})
