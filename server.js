const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var axios = require("axios");
// const connection = mongoose.createConnection('');
// const connection = require("./models/Book.model")(connection);

const PORT = process.env.PORT || 3001;
const app = express();

// Require all models
var db = require("./models");


// Initialize Express
var app = express();

// Connect to the Mongo DB
var databaseUri = 'mongodb://localhost/Poppin';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Middleware for adding mongo db connection to all requests
app.use(function(req,res,next){
  req.connection = connection;
  next()
})

// Routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", (req, res) => {
  console.log("getting all places");
  db.Places.find({})
  .exec(function(err, places){
      if(err){
          res.send("cannont grab places");
      }else{
          console.log(places);
          res.json(places);

      }
  });
})

app.put("/api/increaseScore/:id", (req, res) => {
  db.Places.updateOne({_id: req.params.id}, {"$set":{"countShown": countShown + 1 }})
    .then(function (places) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(places);
      console.log("Count increased");
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
})

app.post("/api/decreaseScore/:id", (req, res) => {
  db.Places.updateOne({_id: req.params.id}, {"$set":{"countShown": countShown -1 }})
    .then(function (places) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(places);
      console.log("Count increased");
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
})

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
