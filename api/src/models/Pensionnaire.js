const { DataTypes } = require("sequelize");
const { db } = require("../postgresql");

const Pensionnaire = db.define("Pensionnaire", {});

module.exports = Pensionnaire;
