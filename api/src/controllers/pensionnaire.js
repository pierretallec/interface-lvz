const express = require("express");
const router = express.Router();

const Pensionnaire = require("../models/Pensionnaire");

router.get("/", async (req, res) => {
  try {
    const data = await Pensionnaire.findAll();
    res.json({ ok: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
