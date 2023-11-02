const mongoose = require("mongoose");
let stdschema = new mongoose.Schema({
  username: String,
  email: String,
  password: Number,
});
const movie = mongoose.model("movie", stdschema);
module.exports = movie;
