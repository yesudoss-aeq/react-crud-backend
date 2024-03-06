const express = require("express");
const route = express.Router();
const studentRoute = require("../schema/schema");
const userRoute = require("../schema/userSchema");

route.get("/", async (req, res) => {
  const { userId } = req.query;
  const data = await studentRoute.find({ author: userId });
  res.json(data);
});

route.post("/", async (req, res) => {
  const data = new studentRoute(req.body);
  await data.save();
  res.json(data);
});

route.put("/:id", async (req, res) => {
  const data = await studentRoute.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(data);
});

route.delete("/:id", async (req, res) => {
  const data = await studentRoute.findByIdAndDelete(req.params.id);
  res.json("data deleted sucessfully");
});

route.post("/signup", async (req, res) => {
  const { userName, password } = req.body;
  const user = await userRoute.find({ userName });
  if (user.length) {
    return res.json({ signup: false, message: "userName already exist" });
  }
  const data = new userRoute(req.body);
  await data.save();
  res.json({ signup: true, message: "signup sucessfull" });
});

route.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await userRoute.find({ userName });
  console.log("user", user);

  if (user.length) {
    if (password === user[0].password) {
      loggeduser = user[0].userName;
      return res.json({ login: true, message: "success", data: user[0] });
    } else {
      return res.json({ login: false, message: "user password incorrect" });
    }
  } else {
    return res.json({ login: false, message: "user not found" });
  }
});

module.exports = route;
