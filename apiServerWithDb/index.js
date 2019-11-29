// include the dependencies
var express = require('express');
var mysql = require('mysql');

// include my modules
var addressDB =  require('./addressDB');

// create the express app
var app = express();

// handle a get request on the server root
app.get('/', function(req, res){
    res.send('Hello World');
});

// return JSON data from the database
app.get('/addresses', async function(req, res){
    let rows = [];
    const db = addressDB.makeDb();
    try {
        rows = await db.query( 'Select id, firstname, lastname from addressDB.address' );
    } catch ( err ) {
      // handle the error
      console.log(err);
    } finally {
      await db.close();
    }
    console.log(rows);
    res.json(rows);
});

// start the express application -> server
app.listen(3000);