var express = require('express');

var app = express();


var data = {
  'key' : "value"
};

app.get('/',function (req,res){

    res.status(200).send(data);

});

app.listen(8080);
