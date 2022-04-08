
import socketio, os, subprocess
import colorama as c, time, json

try:
        subprocess.run(['cls'])
except:
        try:
            subprocess.run(['clear'])
        except: os.system('cls')

print(c.Fore.GREEN + '\n#### - FODB - ####')
print('# Wellcome to FODB - ####')
print('Creating Database...\n')

c.init()
        
io = socketio.Client()


class Database(object):

        def write(self, var, data):

            d = ''
            r = ''
            with open('./FODB - Data - Controle/data.json', 'r') as f:

                d = f.read()
                d = json.loads(d)
                # d = d[var]
                f.close()
            with open('./FODB - Data - Controle/data.json', 'w') as f:
                d[var] = data
                f.write(json.dumps(d))
                f.close()
                r = 'Done'
            return r
        def read(self, var):
            d = ''
            with open('./FODB - Data - Controle/data.json', 'r') as f:

                d = f.read()
                d = json.loads(d)
                d = d[var]
                f.close()
            return d
        def delete(self, var):

            d = ''
            r = ''
            with open('./FODB - Data - Controle/data.json', 'r') as f:

                d = f.read()
                d = json.loads(d)
                # d = d[var]
                f.close()
            with open('./FODB - Data - Controle/data.json', 'w') as f:
                del d[var]
                f.write(json.dumps(d))
                f.close()
                r = 'Done'
            return r


access = Database()

my_uid = ''

def hand1(data):

        global my_uid

        fi = os.listdir('./')
        
        if 'FODB - Data - Controle' not in fi:

            os.mkdir('FODB - Data - Controle')
            with open('FODB - Data - Controle/data.json', 'w') as f:

                f.write('{}')
                f.close()
        else:
            # os.mkdir('FODB - Data - Controle')
            with open('FODB - Data - Controle/data.json', 'w') as f:

                f.write('{}')
                f.close()

        my_uid = data
        time.sleep(2)
        print(c.Fore.CYAN + 'you\'r database code is \' ' + c.Fore.LIGHTMAGENTA_EX + data + c.Fore.CYAN + ' \'\n')
        print ('Shaire thi\'s code to you\'r db users to use this Database...\n\nYou can edit this db data, to edit go to \' ' + c.Fore.LIGHTMAGENTA_EX + ' FODB - Data - Controle ' + c.Fore.CYAN  + ' \' folder and open data.json and edit it... \n\nLearn to use this db with python, node.js, js => https://github.com/UltronTheAI/FreeOnlineDBMaker/blob/main/README.md\n\n')


io.on('get-uid', hand1)

def read(data):
        target = access.read(data[0])
        io.emit('d', [data[1], target])
        print(c.Fore.GREEN + '#### - ' + c.Fore.LIGHTMAGENTA_EX + data[1] + c.Fore.GREEN + ' read data from you\'r db...\n')
io.on('read', read)

def write(data):
        target = access.write(data[0], data[2])
        io.emit('d', [data[1], target])
        print(c.Fore.GREEN + '#### - ' + c.Fore.LIGHTMAGENTA_EX + data[1] + c.Fore.GREEN + ' write data in you\'r db...\n')
io.on('write', write)

def delete(data):
        target = access.delete(data[0])
        io.emit('d', [data[1], target])
        print(c.Fore.GREEN + '#### - ' + c.Fore.LIGHTMAGENTA_EX + data[1] + c.Fore.GREEN + ' delete data in you\'r db...\n')
io.on('delete', delete)

    # @io.event
    # def disconnect():
    #     pass

    # try:
io.connect('https://free-online-db-maker.herokuapp.com')
    # except: pass
# except: print ('hi')
