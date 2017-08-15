var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");



app.get("/results", function(req, res){
	request("http://theapache64.xyz:8080/movie_db/search?keyword=blade", function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body)
			res.render("results", {data:data});
		}
	});
});


app.listen(3000, function () {
  console.log('Our Site is on Port 3000');
});