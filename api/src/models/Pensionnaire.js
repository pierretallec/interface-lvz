/** @format */

const mongoose = require("mongoose");

const pensionnaireSchema = new mongoose.Schema(
  {
    nom: String,
    espece: String,
    age: Number,
    apparence: String,
    sexe: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pensionnaire", pensionnaireSchema);
