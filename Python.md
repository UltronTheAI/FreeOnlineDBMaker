# To Use This DataBase

    http://free-online-db-maker.herokuapp.com/

    Copy this <a https://raw.githubusercontent.com/UltronTheAI/FreeOnlineDBMaker/main/module/Python/FODB.py code to a new file and name it as FODB.py in your project,

    Learn to use this db, read this all info,

    Go To This's web and read some info and

    click on Get Start Button after that

    copy uid, scroll down to controle and notif...

    After This step keep you'r web tap open and create a python file

    and import FODB, write Code To Controle this DB...

# Use This DataBase With Python

    1. import FODB
    
    2. db = FODB.Database ('uid') # set db var = FODB.Database and this function take one argument that is uid that you had copied, now past this copied uid in this function like this db = FODB.Database ('4EhffS3Sxut5XUZTAAAB'), it is for example uid, it is not real uid, you will get real uid on http://free-online-db-maker.herokuapp.com/GetUid
    
    3. db.write('var', 'text') # this function help you to write data in you'r db, this function take two string arg...

    4. data = db.read('var') # this function help you to read data from you'r db and this function return content of this var that you had pass in db.read function...

    5. db.delete('var') # this function help you to delete data from you'r db, this function take var arg means it delete this var from you'r db...

# Code

    import FODB

    db = FODB.Database('uid')

    db.write('python', 'pro')

    data = db.read('python')

    db.delete('python')

