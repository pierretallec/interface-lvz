const express = require("express");
const router = express.Router();

const Veterinaire = require("../models/Veterinaire");

router.get("/", async (req, res) => {
  try {
    const data = await Veterinaire.find();
    res.json({ ok: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
