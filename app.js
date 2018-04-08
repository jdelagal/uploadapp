
var express = require('express');
var app = express();
var formdata =require('form-data');
var fetch = require('node-fetch');

app.get('/cargar', function (req, res) {
  
  var form = new formdata();
  form.append('a', 1);

  res.set('Content-Type', 'multipart/form-data');
  res.send(form);
});

// POST method route
app.get('/guardar', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});