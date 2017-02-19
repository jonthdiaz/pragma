var express = require('express')
var bodyparser = require("body-parser")
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000


app.set('views', './public');
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', function(req,res){
  res.render('index')
})
app.get('/login', function(req,res){
  res.render('index.html')
})
app.get('/registrar-empleados', function(req,res){
  res.render('index.html')
})
app.get('/commits', function(req,res){
  res.render('index.html')
})



http.listen(port, function(error){
  if(error) return console.log("server error"), process.exit();
  console.log('server in port 3000');
})
