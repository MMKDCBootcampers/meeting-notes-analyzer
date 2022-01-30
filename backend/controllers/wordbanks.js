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

module.exports = router;
