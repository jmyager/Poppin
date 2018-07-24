const mongoose = require("mongoose");
// Require all models
var db = require("./models")();

// Connect to the Mongo DB
var databaseUri = 'mongodb://localhost/Popn';

if (process.env.MONGODB_URI) {
  db.connect(process.env.MONGODB_URI);
} else {
  db.connect(databaseUri);
}

db.model('Place').find({_id: "5b5684ce10bcf78bcbadf323"}).exec().then(data=>{console.log(data)});