import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Home = ({ songData }) => {
  const [tableData, setTableData] = useState(songData);

  return (
    <div className="container mt-4">
      <NavBar />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>TOP 10 Songs</h3>
        <Link to="/add-song" className="btn btn-secondary">
          + Add Song
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Art Work</th>
              <th>Song</th>
              <th>Date of Released</th>
              <th>Artists</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((song, index) => (
              <tr key={index}>
                <td>{song.artWork}</td>
                <td>{song.songName}</td>
                <td>{song.dateReleased}</td>
                <td>{song.artists}</td>
                <td>Rating</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
