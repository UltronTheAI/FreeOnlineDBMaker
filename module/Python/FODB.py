import requests, random, time

# Learn To Use Thi's DB With Python https://github.com/UltronTheAI/FreeOnlineDBMaker/blob/main/Python.md
s = requests.Session()

mv = 0

def JRC():
    global mv
    # mv = int(s.get('https://free-online-db-maker.herokuapp.com/nlog').text)
    mv = random.randint(100 + 1, 500 + 21)
    return 

JRC()
# exc = 0

def DataBase_API(mode = '', target = '', var = '', text = 'DataBase', nm = 1):
        global mv
        # var = translate_a(var)
        # print(var)
        # mv += 1
        # exc = exc + 1
        # print(exc)

        app = ''
        # if exc != 6:

        while True:
                s = requests.Session()
                
                app = s.get(f'http://free-online-db-maker.herokuapp.com/api?{target}%&%{mode}%&%{var}%&%{text}%&%{mv}').text
                if '_%&%_wait = 5' not in app:
                    
                    if nm == 1:

                        if 'Error -' in app:

                            # if ' - 8k' in app:

                            #     return False
                            # else:

                                print (f'\033[91m Connection Error[{mode}]...')
                                break
                        else:
                            return 'Done'
                    # if nm == 5:
                        # time.sleep(0.1)
                        # return s.get(f'http://free-online-db-maker.herokuapp.com/api?{mv}').text
                    else:
                        # time.sleep(0.1)
                        while True:
                            s = requests.Session()
                            app = s.get(f'http://free-online-db-maker.herokuapp.com/api?{mv}').text
                            if len(app) != 20 and '_%&%_wait = 5' not in app:
                                
                                return app
                break
    # if exc == 6:
    #     s.get(f'http://free-online-db-maker.herokuapp.com/api').text
    #     time.sleep(0.15)

    #     while True:
    #             s = requests.Session()
                
    #             app = s.get(f'http://free-online-db-maker.herokuapp.com/api?{target}%&%{mode}%&%{var}%&%{text}%&%{mv}').text
    #             if '_%&%_wait = 5' not in app:
                    
    #                 if nm == 1:

    #                     if 'Error -' in app:

    #                         # if ' - 8k' in app:

    #                         #     return False
    #                         # else:

    #                             print (f'\033[91m Connection Error[{mode}]...')
    #                             break
    #                     else:
    #                         return 'Done'
    #                 # if nm == 5:
    #                     # time.sleep(0.1)
    #                     # return s.get(f'http://free-online-db-maker.herokuapp.com/api?{mv}').text
    #                 else:
    #                     # time.sleep(0.1)
    #                     while True:
    #                         s = requests.Session()
    #                         app = s.get(f'http://free-online-db-maker.herokuapp.com/api?{mv}').text
    #                         if len(app) != 20 and '_%&%_wait = 5' not in app:
                                
    #                             return app
    #             break
        
    
    # del app
    # # time.sleep(0.1)
    
    # app = requests.get(f'http://free-online-db-maker.herokuapp.com/api?{mv}').text

    # if 'Error You Can Not' in app:

    #     print ('\033[91m Error You Can Not Save Password, Email, Link, Number, Payment Card Number, -, +, /, *, space In Thi\'s DB')
    #     exit()
    #     # return 'Error You Can Not Save Password, Email, Link, Number, Payment Card Number In Thi\'s DB'

    # # print (f'http://free-online-db-maker.herokuapp.com/api?{target}%&%{mode}%&%{var}%&%{text}')

    # # cat = len(list(str(app.text)))
    
    # # if cat == 20:

    #     # return "Error db.907"

    # return app

# def DataBase_API3(mode, target, var, text = ''):

#     app = requests.get(f'http://free-online-db-maker.herokuapp.com/api?{target}%&%{mode}%&%{var}%&%{text}')
    
#     time.sleep(0.3)
    
#     app = requests.get(f'http://free-online-db-maker.herokuapp.com/api?{target}%&%{mode}%&%{var}%&%{text}')


#     return app.text


db = ''

class Database():


    def __init__(self, uid):

        global db

        # try:
        #     r = DataBase_API('code')
        #     if r == False:
        #         print ('\033[91mConnection Error...')
        # except:
        #     print ('\033[91mConnection Error...')
        #     exit()
        db = uid

    def delete(self, var):

        global db

        var = var

        try: return DataBase_API ('delete', db, var)
        except:
            print ('\033[91mConnection Error...')
            exit()

    def read(self, var):

        var = var

        global db

        try: return DataBase_API ('read', db, var, nm = 2)
        except:
            print ('\033[91mConnection Error...')
            exit()

    # def delete(self, var):

    #     global db

    #     return DataBase_API3 ('delete', db, var)

    def write(self, var, text):

        global db

        var = var
        text = text

        try: return DataBase_API ('write', db, var, text)
        except:
            print ('\033[91mConnection Error...')
            exit()

# print(DataBase_API('write', 'kWsgz5n4-NiBJpYlAAAB', 'Hello', 'My_Data'))

# db_ = DataBase('bA3R6ECCCiGG_UA8AAAB')

# db_.write('Data', 'My_Data')

# print(db_.delete('hi'))

# print (db_.read('Data'))
