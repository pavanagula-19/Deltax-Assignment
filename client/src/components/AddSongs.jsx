import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import AddArtist from './AddArtist';
import NavBar from './NavBar';
import axios from 'axios';

const AddSongs = () => {
  const fileInputRef = useRef(null);
  const [showAddArtistModal, setShowAddArtistModal] = useState(false);
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState('');
  const [songName, setSongName] = useState('');
  const [dateReleased, setDateReleased] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchArtistNames();
  }, []);

  const fetchArtistNames = async () => {
    try {
      const response = await fetch('http://localhost:8080/artists/names');
      if (response.ok) {
        const data = await response.json();
        setArtists(data.artistNames);
      } else {
        console.error('Error fetching artist names.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const narrowerInputStyle = {
    width: '250px',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', songName);
    formData.append('dateReleased', dateReleased);
    formData.append('artist', selectedArtist);
    formData.append('artWork', selectedFile);

    try {
      const response = await axios.post('http://localhost:8080/songs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('Song created successfully');
        // You can add any success handling here, like showing a success message or redirecting
      } else {
        console.error('Error creating song.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <h1 className="mt-4">Add New Song</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="songName" className="form-label me-2">
            Song Name
          </label>
          <input
            type="text"
            className="form-control"
            id="songName"
            style={narrowerInputStyle}
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="dateReleased" className="form-label me-2">
            Date Released
          </label>
          <input
            type="date"
            className="form-control"
            id="dateReleased"
            style={narrowerInputStyle}
            value={dateReleased}
            onChange={(e) => setDateReleased(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="artWork" className="form-label me-2">
            Art Work
          </label>
          <div className="input-group">
            <input
              type="file"
              className="form-control"
              id="artWork"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleUploadButtonClick}
            >
              <FontAwesomeIcon icon={faCamera} className="me-2" />
              Upload Image
            </button>
          </div>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="artists" className="form-label me-2">
            Artists
          </label>
          <div className="d-flex">
            <select
              className="form-select"
              id="artists"
              style={narrowerInputStyle}
              value={selectedArtist}
              onChange={(e) => setSelectedArtist(e.target.value)}
            >
              <option value="">Select</option>
              {artists.map((artist) => (
                <option key={artist} value={artist}>
                  {artist}
                </option>
              ))}
            </select>
            <Button
              variant="secondary"
              onClick={() => setShowAddArtistModal(true)}
            >
              Add Artist
            </Button>
          </div>
        </div>
        <div className="mb-3 d-flex">
          <button type="button" className="btn btn-outline-secondary me-2">
            Cancel
          </button>
          <button type="submit" className="btn btn-secondary">
            Save
          </button>
        </div>
      </form>

      {/* AddArtist modal */}
      <AddArtist
        show={showAddArtistModal}
        onHide={() => setShowAddArtistModal(false)}
      />
    </div>
  );
};

export default AddSongs;
