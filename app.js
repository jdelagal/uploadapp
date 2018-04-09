var express = require('express');
var formData = require('form-data');
var fs = require('fs');
var fetch = require('node-fetch');
var app = express()



var formData = {
  my_file: fs.createWriteStream(__dirname +'/uploads/chiquipedia.jpg')
};
console.log('formData: ', formData ) ;

fetch('https://datapower/factoriaustglobal/sb/jose/cargar', { method: 'POST', body: formData })
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});