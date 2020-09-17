// `require()` is a global node function that is used to import
// node packages.  This only works on the server side; this
// will not work in the browser.  RequireJS is a library which
// introduces a `require()` function to the client side, so it
// CAN run in the browser, but you have to install it, and it
// does not exist natively like it does with Node.

// In this case, we are importing a function.  Express is
// available from node_modules, so if anything doesn't work,
// try running `npm install` again.  Express is a Node package
// that makes running a server via Node much easier, since
// that's normally fairly complicated.
const express = require('express')

// Running the express function creates a new app
// (basically it represents your server)
const app = express()

// You can choose almost any port number. 3000 is a very
// typical choice.  This means you can access whatever your
// server is serving up by visiting localhost:3000 in the browser.
const port = 3000

// Since functions are also objects in JavaScript, you can access
// properties and methods of functions just like a normal object.
// `express.static()` is a method of the express (function) object.
// It defines a root directory, which tells the server where
// to look for files by default.  `__dirname` is a variable that
// represents the current directory of this file.
const dir = express.static(__dirname + '/src')

// This actually uses the directory defined above.  Without this,
// any relative URL references in your html, css, and javascript
// will not work.
app.use(dir)

// This function just helps us simplify the usual syntax a bit.  You
// may notice the TWO => symbols, which just means this is a function
// that returns another function.  A useful shortcut when you want
// to generate a callback on the fly.  (reminder: a callback function
// is just a function you pass into another function so it can be called
// later on.)
const getResponseCallback = filePath => (request, response) => response.sendFile(__dirname + filePath)

// `app.get()` defines a route on our app (localhost:3000) which uses
// the GET method for the http request.  The details aren't important
// right now, just suffice to say that the first argument is the URL,
// and the second argument is the file which gets served at that URL.
app.get('/', getResponseCallback('/index.html'))
app.get('/about', getResponseCallback('/about.html'))
app.get('/projects', getResponseCallback('/projects.html'))
app.get('/resume', getResponseCallback('/resume.html'))
// The above routes will let you use href="/about" instead of href="about.html"
// in your <a> tags.

// Now that we know everything about our app, we can run the server by
// using `app.listen()`, where the first argument is the port number we
// defined earlier, and the second argument is a callback that runs
// (server-side) immediately after starting the app.  All we're doing
// in this case is logging to the console, which, since this is running
// server-side, will log to the terminal instead of the browser console.
app.listen(port, () => console.log(`listening on port ${port}!`))

// to run this script in Node, simply type `node server.js` in the terminal.
// When you see "listening on port 3000" open your browser and type
// localhost:3000 in the URL bar.
