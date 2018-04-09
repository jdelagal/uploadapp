var express = require('express');
var formData = require('form-data');
var fs = require('fs');
var fetch = require('node-fetch');
var stream = require('stream');
var app = express()


app.get('/carga', function(req, res) {
  var formData = {
    my_file: fs.createWriteStream(__dirname +'/uploads/chiquipedia.jpg')
    //my_file: fs.createReadStream(__dirname +'/uploads/index.html')
  };
  
  console.log('formData: ', formData ) ;
  //res.body=formData;
	res.send(formData);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});