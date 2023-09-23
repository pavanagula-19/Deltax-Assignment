import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddArtist = ({ show, onHide }) => {
  const [artistName, setArtistName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [bio, setBio] = useState('');

  const handleAddArtist = () => {
    // Implement your logic to add the artist here
    // You can access artistName, dateOfBirth, and bio here
    // For example, you can send a request to your server to add the artist
    // After adding the artist, you can close the modal using onHide()
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Artist</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="artistName" className="form-label">Artist Name</label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="artistName"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  placeholder="Enter artist name"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">Bio</label>
            <textarea
              className="form-control"
              id="bio"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter artist bio"
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant=" btn btn-outline-secondary ms-2" onClick={onHide}>Close</Button>
        <Button variant="secondary" onClick={handleAddArtist}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddArtist;
