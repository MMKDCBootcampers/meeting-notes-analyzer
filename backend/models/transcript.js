const mongoose = require("mongoose");
const { Schema } = mongoose;

const transcriptSchema = new Schema({
  userId: { type: String, required: true },
  conversationId: { type: String, required: false },
  text: { type: Array, required: false },
  description: { type: String, required: false },
  speakers: { type: Array, required: false },
  // audio: { type: Audio, required: false }, // storing the audio is a stretch goal
  date: { type: Date, default: new Date() },
});

const Transcript = mongoose.model("Transcript", transcriptSchema);

module.exports = Transcript;
