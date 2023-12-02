/** @format */

const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

mongoose
  .connect(MONGODB_URI)
  .then((self) => {
    console.log(`🍀 connected to mongo : ${self.connection.name}`);
  })
  .catch((error) => {
    console.error(error);
  });
