//jshint esversion:6


const express = require("express");
const path = require("path");

const app = express();
const port = 3000

app.use(express.urlencoded({extended:true})); // Need to write this code everytime we use body-parser. Allows us to 
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
})
app.post("/", function(req, res){
    let num1 = Number(req.body.n1);
let num2 = Number(req.body.n2);
let answer = num1 + num2;
    res.send(String(answer));
});
 
app.get('/bmiCalculator', function(req, res) {
    res.sendFile(path.join(__dirname, '/bmiCalculator.html'));
})   

app.post("/bmiCalculator", function(req, res){
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight/(height*height);

  res.send("Your BMI is " + bmi);
});




// app.use(express.static('public'));

app.listen(port, function(){
  console.log(`Example app listening on port 3000`)
})