// routes/artistsRoute.js
const express = require("express");
const router = express.Router();
const Artist = require("../models/artistsSchema");

// Route to create a new artist
router.post("/", async (req, res) => {
  try {
    const { artistName, dateOfBirth, bio } = req.body;

    // Create a new artist document
    const artist = new Artist({
      artistName,
      dateOfBirth,
      bio,
    });

    // Save the artist to the database
    await artist.save();

    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to get all artists with full details
router.get('/', async (req, res) => {
  try {
    const artists = await Artist.find({});
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/names', async (req, res) => {
  try {
    const artists = await Artist.find({}, 'artistName');
    const artistNames = artists.map((artist) => artist.artistName);
    res.json({ artistNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete("/", async (req, res) => {
  try {
    // Delete all artist records from the database
    await Artist.deleteMany({});

    res.json({ message: "All artist names deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
