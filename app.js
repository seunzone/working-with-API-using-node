var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(request, response){
	res.send("Yaay it works");
});


app.listen(3000, function () {
  console.log('Our Site is on Port 3000');
});