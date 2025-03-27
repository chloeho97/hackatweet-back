const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  firstname : String,
  password: String,
  token: String,
  isAdmin: Boolean,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
