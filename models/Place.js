var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PlaceSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  address: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true,
    default: false
  },

  countShown: {
      type: Number,
      required: true,
      default: 0
  },

  image: {
      type: String,
      required: true,
  }
});

// This creates our model from the above schema, using mongoose's model method
var Place = mongoose.model("Place", PlaceSchema);

// Export the Article model
module.exports = Place;