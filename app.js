const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
items = ["Brush your Teeth", "Drink Water", "Do Push-Ups"];
workItems = [];

app.use(express.static("public"));

app.get('/', function(req, res) {
  day = date();

  res.render('list', {TitleList:day,addedItem:items});
});

app.post("/", function(request, response) {
 let item = request.body.nextToDoList;

 if (request.body.list == "Work-List") {
   workItems.push(item);
   response.redirect("/work");
 }
 else {
   items.push(item);
   response.redirect("/");
 }
});

app.get("/work", function(req, res) {
  let title = "Work-List"
  res.render("list", {TitleList:title, addedItem:workItems});
});
app.get("/about", function(req, res) {
  res.render("about");
})

// app.post("/work", function(req, res) {
//   let onlyItem = req.body.nextToDoList;
//
//   onlyItems.push(onlyItem);
//
// })

  app.listen(3000, function() {
  console.log("Listening to port 3000");
});
