require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { JWT_SECRET } = process.env;
const router = express.Router();
const bcrypt = require("bcrypt");

// Database
const { Wordbank } = require("../models");

router.get("/test", (req, res) => {
  res.json({ message: "Wordbank endpoint OK! ✅" });
});

router.post("/new", async function (req, res) {
  const userId = req.body.userId;
  let words = req.body.words;
  const addWordbank = await Wordbank.create({ userId: id, words });
  res.json({ message: "New wordbank added!" });
});

// list all wordbanks: seems to be working
router.get("/list", async (req, res) => {
  try {
    const userId = req.body.userId;
    let wordbanks = await Wordbank.find({ userId });
    res.json({ wordbanks: wordbanks });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

module.exports = router;
