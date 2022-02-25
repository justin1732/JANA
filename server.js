var express = require('express');
var request = require ('request');
var path = require ('path');
var app = express ();
var PORT = process.envPORT || 8080;

app.get('/', function (req, res, next){
    var info = request ({
         uri: 'https://www.googleapis.com/books/v1/volumes?q=transall',
     })
     .pipe(res);
     // next();
     // res.json('index', {info});
  });

app.get('/', function (req, res, next){
   var info = request ({
        uri: 'https://api.paylocity.com/api/v2/openapi',
    })
    .pipe(res);
    // next();
    // res.json('index', {info});
 });
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');



app.listen(PORT, function(){
    console.log ('Server listening on port ' + PORT);
});

module.exports = app;