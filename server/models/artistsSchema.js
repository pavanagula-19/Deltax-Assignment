// models/Artist.js
const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  artistName: String,
  dateOfBirth: Date,
  bio: String,
});

module.exports = mongoose.model("Artist", artistSchema);
