var mongoose = require("mongoose");

module.exports = function(){
    require('./Place')(mongoose);
    return mongoose;
}