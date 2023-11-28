require("dotenv").config({ path: "../.env" });

const { PORT } = require("./config");

const express = require("express");

const { db } = require("./postgresql");

const app = express();

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

(async () => await db.sync())();
