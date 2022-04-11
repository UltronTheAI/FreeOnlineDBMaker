<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.socket.io/socket.io-3.0.1.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="height: 110vh;">
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Free Online Database</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Agree over user agreement</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">This database is free to use, over agreement is for safety of data management system, read this all carefully and click on Agree.</p>
      </div>
  
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Main information</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">You can create your own database in this web app, after clicking Get Started then you will get a code that is database access code, you can use this code to read, write and delete data in your db, you can share this to anyone who you know But don't share this code with stranger because they can access your database, if they have access to your database and they save illegal things, data, private info in your database then it is your responsibility because you had created database and you are the head of that database and you had shared access code to stranger, to solve the problem you can use hidden server side backend, if you save illegal things, data, private info in database then it is your responsibility.</dd>
          </div>
  
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Heroicon name: outline/scale -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Some safety of inserting data in db</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">I had blocked some text insert system because some people can save email, password, api link or any link, phone number so i had blocked this text insert system, you can not save numbers, gmail, @, ., space, -, +, /, *, link in this database, this database client to client connection is private and no leak of data.</dd>
          </div>
  
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Heroicon name: outline/lightning-bolt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Speed</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">This database has a good speed, its dependent on your network connection.</dd>
          </div>
  
          <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Heroicon name: outline/annotation -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Use this db with programming languages</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">Go to this web and start using this db with programming languages <a href="https://ultrontheai.github.io/FreeOnlineDBMaker/" class="text-teal-500">Github.io</a>.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>  
  <div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div class="flex justify-center">
            <img src="https://avatars.githubusercontent.com/u/79976106?v=4" class="w-1/3">
        </div>
        <h3 class="text-2xl font-bold text-center"></h3>
        <!-- <form action=""> -->
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Name<label>
                            <input type="text" placeholder="Name"
                                class="na w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            <span class="text-xs tracking-wide text-red-600">Name field is required</span>
                </div>
                <div class="flex items-baseline justify-between">
                    <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onclick="socket.emit('agree', document.querySelector('.na').value)">I Agree</button>
                    <!-- <a href="#" class="text-sm text-blue-600 hover:underline"></a> -->
                </div>
            </div>
        <!-- </form> -->
    </div>
</div>
<script>
    // var u = 'http://localhost:5000/GetUid?';
    const socket = io('https://free-online-db-maker.herokuapp.com/');

    socket.on('connection');

    socket.on('d', (data) => {
      // u = u + data;
      // alert(u)
      location.href='https://free-online-db-maker.herokuapp.com/GetUid?' + String(data);
    });
</script>
</body>
</html>
