const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//specify where to find the schema
const Item = require("./models/item");
// connect and display the status
mongoose
  .connect(
    "mongodb+srv://syed:syedahmed@cluster0.vgcwq.mongodb.net/<IT6203>?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error connecting");
  });
// "mongodb://localhost:27017/IT6203"

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //can connect from any host
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, OPTIONS, DELETE"
  ); //allowable methods
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
app.get("/inventory", (req, res, next) => {
  Item.find()
    //if data is returned, send data as a response
    .then((data) => res.status(200).json(data))
    //if error, send internal server error
    .catch((err) => {
      console.log("Error: ${err}");
      res.status(500).json(err);
    });
});
//:id is a dynamic parameter that will be extracted from the URL
app.delete("/inventory/:id", (req, res, next) => {
  Item.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

app.post("/inventory", (req, res, next) => {
  // create a new item variable and save request’s fields
  const item = new Item({
    itemName: req.body.itemName,
    itemCategory: req.body.itemCategory,
    price: req.body.price,
    stock: req.body.stock,
  });
  //send the document to the database
  item
    .save()
    //in case of success
    .then(() => {
      console.log("Success");
    })
    //if error
    .catch((err) => {
      console.log("Error:" + err);
    });
});

//to use this middleware in other parts of the application
module.exports = app;
