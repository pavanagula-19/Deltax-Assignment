const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./database");

dotenv.config();
connectDatabase();

app.use(cors());
app.use(express.json());

// Import artist and song routes
const artistsRouter = require("./routes/artistsRoute");
const songsRouter = require("./routes/songsRoute");

// Use artist and song routes
app.use("/artists", artistsRouter);
app.use("/songs", songsRouter); // Define a route for songs

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
