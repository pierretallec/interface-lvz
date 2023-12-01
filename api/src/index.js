require("dotenv").config({ path: "./.env" });

const { PORT } = require("./config");

const express = require("express");

const { db } = require("./postgresql");

const app = express();
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

app.use("/pensionnaire", require("./controllers/pensionnaire"));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

(async () => await db.sync())();
