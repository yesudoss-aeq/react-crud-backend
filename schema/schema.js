const mongoose = require("mongoose");

const studentScema = mongoose.Schema({
  name: String,
  age: Number,
  oss: String,
  python: String,
  cloudComputing: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("data", studentScema);
