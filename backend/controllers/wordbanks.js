require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { JWT_SECRET } = process.env;
const router = express.Router();
const bcrypt = require("bcrypt");

// Database
const { User } = require("../models");

router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "Wordbank endpoint OK! ✅" });
  }
);

// add a new word
// can add multiple words if comma separated
router.post("/new", async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email }, "wordbanks");
    let words = req.body.words;
    words = words.split(",");
    words.forEach((e) => user.wordbanks.push(e));
    user.save();
    res.json({ message: "New words added!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

// list all words in wordbank for a user
// must provide email in api call
router.get("/list", async (req, res) => {
  try {
    const wordbank = await User.findOne(
      { email: req.query.email },
      "wordbanks"
    );
    res.json({ data: wordbank });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

// works, deletes word at given index
// must provide email in api call
router.post("/delete", async (req, res) => {
  try {
    const index = req.body.index;
    const userId = req.body.userId;
    let user = await User.findOne({ email: req.body.email }, "wordbanks");
    let updatedWords = user.wordbanks;
    updatedWords.splice(index, 1);
    user.wordbanks = updatedWords;
    user.save();
    res.json({ message: "Deleted word" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

// router.post("/delete", async (req, res) => {
//   try {
//     console.log(req.body);
//     const index = req.body.index;
//     const userId = req.body.userId;
//     let user = await User.findOne({ userId }, "wordbanks");
//     let updatedWords = user.wordbanks;
//     updatedWords.splice(index, 1);
//     user.wordbanks = updatedWords;
//     user.save();
//     res.json({ message: "Deleted word" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "There was an error. Please try again.",
//     });
//   }
// });

module.exports = router;
