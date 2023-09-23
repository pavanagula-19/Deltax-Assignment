import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [artistsData, setArtistsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch top songs data
        const response = await axios.get('http://localhost:8080/songs');
        setTableData(response.data);

        // Fetch top artists data (including names, date of birth, and songs)
        const artistsResponse = await axios.get('http://localhost:8080/artists/');
        setArtistsData(artistsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

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
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((song, index) => (
              <tr key={index}>
                <td>
                  <img src={song.artWork} alt={song.sname} style={{ width: '100px' }} />
                </td>
                <td>{song.sname}</td>
                <td>{song.date.split("T")[0]}</td>
                <td>{song.artists}</td>
                <td>
                  <Rating />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Top 10 Artists</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Artists</th>
              <th>Date of Birth</th>
              <th>Songs</th>
            </tr>
          </thead>
          <tbody>
            {artistsData.map((artist, index) => (
              <tr key={index}>
                <td>{artist.artistName}</td>
                <td>{artist.dateOfBirth.split("T")[0]}</td>
                <td>{artist.bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
