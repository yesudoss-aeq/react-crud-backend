const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  mail: String,
  userName: String,
  password: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "data" }],
});

module.exports = mongoose.model("user", userSchema);
