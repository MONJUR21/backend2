const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Monjur1");

const UserSchema = mongoose.Schema({
  username: String,
  name: String,
  Id: Number
});

module.exports = mongoose.model("myCollection", UserSchema);
