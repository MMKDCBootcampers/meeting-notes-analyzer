require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { JWT_SECRET } = process.env;
const router = express.Router();
const bcrypt = require("bcrypt");

// Database
const { User, Transcript } = require("../models");

router.get("/test", (req, res) => {
  res.json({ message: "Transcript endpoint OK! ✅" });
});

// add a new transcript
router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async function (req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      user.save(function (err) {
        if (err) return handleError(err);

        const transcript1 = new Transcript({
          userId: user._id,
          conversationId: req.body.conversationId,
          description: req.body.description,
        });

        transcript1.save(function (err) {
          if (err) return handleError(err);
        });
      });

      res.json({ message: "New transcript added!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "There was an error. Please try again.",
      });
    }
  }
);

// // add a new transcript
// router.post(
//     "/new",
//     passport.authenticate("jwt", { session: false }),
//     async function (req, res) {
//       try {
//         const user = await User.findOne({ email: req.body.email });
//         const transcript = await Transcript.create({
//           userId: "test",
//           conversationId: req.body.conversationId,
//           description: req.body.description,
//         });
//         user.transcripts.push(transcript);
//         user.save();
//         res.json({ message: "New transcript added!" });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({
//           message: "There was an error. Please try again.",
//         });
//       }
//     }
//   );

// list all transcripts
// must provide userId in api call
router.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      const transcripts = await Transcript.find({ userId: user._id });
      res.json({ data: transcripts });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "There was an error. Please try again.",
      });
    }
  }
);

// works, deletes word at given index
router.post("/delete", async (req, res) => {
  try {
    const index = req.body.index;
    const userId = req.body.userId;
    let user = await User.findOne({ userId }, "wordbanks");
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

module.exports = router;
