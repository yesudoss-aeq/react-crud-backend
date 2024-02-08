const express = require("express");
const route = express.Router();
const studentRoute = require("./schema");

route.get("/", async (req, res) => {
  const data = await studentRoute.find();
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

module.exports = route;
