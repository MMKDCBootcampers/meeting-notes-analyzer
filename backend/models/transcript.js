const mongoose = require("mongoose");
const { Schema } = mongoose;

const transcriptSchema = new Schema({
  userId: { type: String, required: true },
  text: { type: Array, required: true },
  description: { type: String, required: false },
  speakers: { type: Array, required: false },
  audio: { type: Audio, required: false },
  date: { type: Date, default: new Date() },
});

const Transcript = mongoose.model("Transcript", transcriptSchema);

module.exports = Transcript;
