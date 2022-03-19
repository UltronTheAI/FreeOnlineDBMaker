import socketio

socket = socketio.Client()

uid_ = ''

# @socket.event
# def disconnect():
#     print("I'm disconnected!")

def uid(uid):

    global uid_

    uid_ = uid

    data = {
        "method": "read",
        "var": "Data",
        "text": "Hello",
        "uid": "UZ-1RheoS1L3DyMpAAAJ"
    }

    target = data['uid']
    var = data['var']
    mode = data['method']

    if mode == 'read':

        socket.emit('read', [target, var, uid])
    if mode == 'write':

        socket.emit('write', [target, var, uid, data['text']]) 
    if mode == 'delete':

        socket.emit('delete', [target, var, uid, data['text']]) 

socket.on('get-uid', uid)

def read(data):

    if data[2] == uid_:
        print(data)
        socket.disconnect()
    # socket.dissconnect()

def write(data):

    data1 = data[0]
    data2 = data[1]

    # print (data1, uid_)

    if str(data1).replace(' ', '') == uid_:

        print (data2)
        socket.disconnect()

socket.on('read', read)
socket.on('d', write)

# uid()

socket.connect('https://free-online-db-maker.herokuapp.com')
