const mongoose = require("mongoose");
const { Schema } = mongoose;

const wordbankSchema = new Schema({
  userId: { type: String, required: true },
  words: { type: Array, required: true },
  date: { type: Date, default: new Date() },
});

const Wordbank = mongoose.model("Wordbank", wordbankSchema);

module.exports = Wordbank;
