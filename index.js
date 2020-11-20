const express = require('express');
var moment = require('moment'); 

var logger = require('morgan');
const path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser');

// Initialize the app and create a port
const PORT = process.env.PORT || 3008;
const app = express();

const { entries }= require('./lib/entries');

// Set up body parsing, static, and logger middleware

// In order for the server to accept incoming data (POST) it needs to be converted to JSON Object
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));
//log all requests to the server
app.use(logger("dev"));


function createNewEntry(body, entriesArray) {
    console.log(body);
    // our function's main code will go here!
    const entry ={
      title: body.title,
      body: body.body,
      published: body.published
    };
    entriesArray.push(entry);
    fs.writeFileSync(
      path.join(__dirname, './lib/entries.json'),
      JSON.stringify({ entries: entriesArray }, null, 2)
    );
    // return finished code to post route for response
    return entry;
    
  }
//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/guessBook.html'));
});
app.get('/view', (req, res) => {
  res.sendFile(path.join(__dirname, './public/view.html'));
});

// app.get("/api", function (req, res) {

//   res.json(entries);
// })

// app.get("/new", function (req, res) {

//     res.json(entries);
// });
app.get('/new', (req, res) => {
  res.json(entries);
});

app.post('/new', (req, res) => {
    req.body.published = moment().format('llll');
    var newEntry = req.body;
    console.log("I'm in my post route /new ");
    console.log("Body: " , req.body);
    // console.log(JSON.stringify(req.body));
    console.log('query: ', req.query)
    

    if (!req.body.title || !req.body.body) {
        res.send("You must add something");
        return;
    }
  
    console.log(entries);
    const entry = createNewEntry(newEntry, entries);
      res.json(entry);
      // res.redirect('/');

})

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));