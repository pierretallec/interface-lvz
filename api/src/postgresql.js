const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = require("./config");
const CONFIGFILE = require("./config");

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

db.authenticate()
  .then(() =>
    console.log("Connection has been established successfully to the database.")
  )
  .catch((err) => console.error("Unable to connect to the database :", err));

module.exports = { db };
