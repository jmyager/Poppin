const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Require all models
var db = require("./models");

const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the Mongo DB
var databaseUri = 'mongodb://localhost/Popn';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}


//Middleware for adding mongo db connection to all requests
// app.use(function(req,res,next){
//   req.connection = connection;
//   next()
// })


// Default route to pull all places from database
app.get("/places", (req, res) => {
  console.log("getting all places");
  db.Place.find({}).sort({ countShown: - 1 })
    .exec(function (err, places) {
      if (err) {
        res.send("cannont grab places");
      } else {
        res.json(places);

      }
    });
})

// Route to filter data by bars
app.get("/filter-bars", (req, res) => {
  console.log("getting all places");
  db.Place.find({ type: "bar" })
    .exec(function (err, places) {
      if (err) {
        res.send("cannont grab places");
      } else {
        console.log(places);
        res.json(places);
      }
    });
})

// Route to filter data by nightclubs
app.get("/filter-nightclubs", (req, res) => {
  console.log("getting all places");
  db.Place.find({ type: "nightclub" })
    .exec(function (err, places) {
      if (err) {
        res.send("cannont grab places");
      } else {
        console.log(places);
        res.json(places);
      }
    });
})

app.get("/sort-ascending", (req, res) => {
  console.log("getting all places");
  db.Place.find({}).sort({ countShown: 1 })
    .exec(function (err, places) {
      if (err) {
        res.send("cannont grab places");
      } else {
        console.log(places);
        res.json(places);

      }
    });
});

app.put("/api/increaseScore/:id", (req, res)=>{
  console.log("id sent over: " + req.params.id);
  var newID =  mongoose.Types.ObjectId(req.params.id);
  console.log(newID);
  db.Place.find().where({id: mongoose.Types.ObjectId(req.params.id)})
    .then((place) => {
      console.log(JSON.stringify(place))
      place.countShown = place.countShown + 1;
      return place.save();
    })
    .then(place=>{
      console.log(JSON.stringify(place))
      res.json(place);
    })
    .catch((err) => {console.log(err);res.sendStatus(500)});
});

app.put("/api/decreaseScore/:id", (req, res) => {
  console.log("req: " + req.params.id);
  db.Place.update(
    { _id: req.params.id},
    { $inc: { "countShown": -1 } }
  )
    .exec()
    .then(function (places) {
      res.json(places);
      console.log("Count decreased");
      console.log("places: " + places.countShown);
    })
    .catch(function (err) {
      res.json(err);
    });
})
// Routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
