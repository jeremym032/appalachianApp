var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/css', express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(5000, function(){
	console.log('Test App is running');
});
