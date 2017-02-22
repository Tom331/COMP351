var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send("Hellow world, from express")
})
app.listen(3000, function(){
console.log("example app listening on port 3000")
})
