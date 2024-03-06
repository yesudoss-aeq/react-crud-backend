const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const totalRouter = require("./routes/route");

const port = process.env.PORT;
const remoteDb = process.env.REMOTE_DB;
app.use(express.json());
app.use(cors());
app.use("/info", totalRouter);

app.use((req, res) => {
  res.json("no document found");
});

mongoose
  .connect(remoteDb)
  .then(() => {
    console.log("server connected to DB");
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  })
  .catch((err) => console.log("err wile connecting"));
