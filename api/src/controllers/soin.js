const express = require("express");
const router = express.Router();

const Soin = require("../models/Soin");

router.get("/", async (req, res) => {
  try {
    const data = await Soin.find();
    res.json({ ok: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
