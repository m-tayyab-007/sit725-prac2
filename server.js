var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function(req,res){
    console.log(req.query.array);
    res.send(200);
});

var port = 3000;
app.listen(port);

console.log('server listening to : '+port);

