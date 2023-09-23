import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddSongs from './components/AddSongs';

function App() {
  const [songData, setSongData] = useState([]); // Create state to store song data

  const handleAddSong = (formData) => {
    // Add the new song data to the state
    setSongData([...songData, formData]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home songData={songData} />} // Pass songData as a prop
        />
        <Route
          path="/add-song"
          element={<AddSongs onAddSong={handleAddSong} />} // Pass onAddSong function as a prop
        />
      </Routes>
    </Router>
  );
}

export default App;
