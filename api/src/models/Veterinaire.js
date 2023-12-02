/** @format */

const mongoose = require("mongoose");

const veterinaireSchema = new mongoose.Schema(
  {
    nom_veto: String,
    nom_clinique: String,
    adresse_clinique: Number,
    tel: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Veterinaire", veterinaireSchema);
