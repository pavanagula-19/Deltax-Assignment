import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddSongs from "./components/AddSongs";

function App() {
  const [songData, setSongData] = useState([]);

  const handleAddSong = (formData) => {
    // Add the new song data to the state
    setSongData([...songData, formData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home songData={songData} />} />
        <Route
          path="/add-song"
          element={<AddSongs onAddSong={handleAddSong} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
