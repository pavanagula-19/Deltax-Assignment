import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import AddArtist from './AddArtist';
import NavBar from './NavBar';

const AddSongs = () => {
  const fileInputRef = useRef(null);
  const [showAddArtistModal, setShowAddArtistModal] = useState(false);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const narrowerInputStyle = {
    width: '250px',
  };

  return (
    <div className="container">
        <NavBar />
      <h1 className="mt-4">Add New Song</h1>
      <form>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="songName" className="form-label me-3">Song Name</label>
          <input
            type="text"
            className="form-control"
            id="songName"
            style={narrowerInputStyle}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="dateReleased" className="form-label me-3">Date Released</label>
          <input
            type="date"
            className="form-control"
            id="dateReleased"
            style={narrowerInputStyle}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="input-group">
  <label htmlFor="artWork" className="form-label me-2">Art Work</label>
  <div className="d-flex align-items-center">
    <input
      type="file"
      className="form-control"
      id="artWork"
      style={{ display: 'none' }}
      ref={fileInputRef}
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
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="artists" className="form-label me-3">Artists</label>
          <div className="d-flex">
            <select
              className="form-select"
              id="artists"
              style={narrowerInputStyle}
            >
              <option>Select</option>
              <option>Lewis Capaldi</option>
              <option>John Henry</option>
              <option>Lewis Capaldi</option>
            </select>
            <Button variant="secondary" onClick={() => setShowAddArtistModal(true)}>
              Add Artist
            </Button>
          </div>
        </div>
        <div className="mb-3 d-flex">
  <button className="btn btn-outline-secondary ms-2 me-2">Cancel</button>
  <button className="btn btn-secondary">Save</button>
</div>
      </form>

      {/* AddArtist modal */}
      <AddArtist show={showAddArtistModal} onHide={() => setShowAddArtistModal(false)} />
    </div>
  );
};

export default AddSongs;
