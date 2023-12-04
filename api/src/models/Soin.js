/** @format */

const mongoose = require("mongoose");

const soinSchema = new mongoose.Schema(
  {
    id_Veto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Veterinaire",
    },
    id_pensionnaire: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pensionnaire",
    },
    date: { type: Date },
    dateRappel: { type: Date },
    soin: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Soin", soinSchema);
