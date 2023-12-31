/** @format */

require("dotenv").config({ path: "./.env" });

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

require("./mongo.js");

const { PORT, APP_URL, NODE_ENV } = require("./config");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

//app,use
app.use("/pensionnaire", require("./controllers/pensionnaire.js"));
app.use("/veternaire", require("./controllers/veterinaire.js"));
app.use("/soin", require("./controllers/soin.js"));

//registerSentryErrorHandler();

app.listen(PORT, () => console.log("Listening on port " + PORT));
