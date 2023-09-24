const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Song } = require("../models/songsSchema");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "song-artwork",
    resource_type: "auto",
  },
});

const upload = multer({ storage });

router.post("/", upload.single("artWork"), async (req, res) => {
  try {
    const { sname, date, artists } = req.body;
    const artWorkUrl = req.file.path;

    const song = new Song({
      sname,
      date,
      artists,
      artWork: artWorkUrl,
    });

    await song.save();

    res.status(201).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();

    res.status(200).json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/", async (req, res) => {
  try {
    await Song.deleteMany({});

    res.status(204).json({ message: "All songs deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
