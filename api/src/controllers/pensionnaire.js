const express = require("express");
const router = express.Router();

const Pensionnaire = require("../models/Pensionnaire");

router.get("/", async (req, res) => {
  try {
    const data = await Pensionnaire.find();
    res.json({ ok: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    // const nom = req.body.nom;
    console.log(req.body.nom);
    //const data = await Pensionnaire.create({});

    // res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error("Failed to insert data into MongoDB:", error);
    res.status(500).json({ error: "Failed to insert data into the database" });
  }
});

module.exports = router;
