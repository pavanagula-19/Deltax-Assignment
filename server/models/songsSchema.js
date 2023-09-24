const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  sname: String,
  date: Date,
  artists: String,
  artWork: {
    type: String,
    required: true,
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = { Song };
