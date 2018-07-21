var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var UsersSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         unique: false,
//     }
// });

var PlacesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    address: {
        type: String,
        required: true,
        unique: false,
    },
    upVoteCount: {
        type: Number,
        defualt: 0,
    },
    downVoteCount: {
        type: Number,
        defualt: 0,
    },
    countShown: {
        type: Number,
        defualt: 0,
    },


});
// module.exports = function(connection){
//     connection.model("Users", UsersSchema);
//     connection.model("Places", PlacesSchema);
// }

// This creates our model from the above schema, using mongoose's model method
// var User = mongoose.model("Users", UsersSchema);
module.exports = mongoose.model("Places", PlacesSchema);

// Export the Article model
// module.exports = User;
// module.exports = Place;