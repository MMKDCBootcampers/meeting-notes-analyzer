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

// list all transcripts
// uses email in api call to find all transcripts associated with that email
router.get(
  "/list",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.query.email });
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

router.get(
  "/find",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const conversationId = req.body.conversationId;
      const user = await User.findOne({ email: req.body.email });
      const transcript = await Transcript.findOne({ conversationId });
      res.json({ data: transcript });
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
    const conversationId = req.body.conversationId;
    await Transcript.deleteOne({ conversationId })
      .then(function () {
        console.log("Transcript deleted");
      })
      .catch(function (error) {
        console.log(error);
      });

    res.json({ message: "Deleted transcript" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "There was an error. Please try again.",
    });
  }
});

module.exports = router;
