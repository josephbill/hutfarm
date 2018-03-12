var express = require ('express');
var app = express();

app.get('/', function (req, res){
	//checking if server connects to browser
  res.send("hello world")

});


app.listen(3000);
console.log("server inarun pale port 3000");

