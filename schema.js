const mongoose = require("mongoose");

const studentScema = mongoose.Schema({
  name: String,
  age: Number,
  oss: String,
  python: String,
  cloudComputing: String,
});

module.exports = mongoose.model("data", studentScema);
