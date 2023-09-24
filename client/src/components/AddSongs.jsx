import React, { useEffect, useState } from "react";
import axios from "axios";
import AddArtist from "./AddArtist";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";

const AddSongs = () => {
  const [showAddArtistModal, setShowAddArtistModal] = useState(false);
  const [artists, setArtists] = useState([]);
  const [data, setData] = useState({
    sname: "",
    date: "",
    img: null,
    artists: "",
  });

  const narrowerInputStyle = {
    width: "250px",
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      img: e.target.files[0],
    });
  };

  const handleAddArtist = (newArtist) => {
    setArtists([...artists, newArtist]);
    setShowAddArtistModal(false);
  };
  const fetchArtistNames = async () => {
    try {
      const response = await fetch("http://localhost:8080/artists/names");
      if (response.ok) {
        const data = await response.json();
        setArtists(data.artistNames);
      } else {
        console.error("Error fetching artist names.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchArtistNames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("sname", data.sname);
    formData.append("date", data.date);
    formData.append("artists", data.artists);
    formData.append("artWork", data.img);

    try {
      const response = await axios.post(
        "http://localhost:8080/songs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        const songData = response.data;
        console.log("Song created successfully");
        console.log("Song Image URL:", songData.artWork);
      } else {
        console.error("Error creating song.");
      }
    } catch (error) {
      console.error(error);
    }

    // Reset the form data after submission
    setData({
      sname: "",
      date: "",
      img: null,
      artists: "",
    });
  };

  return (
    <div className="container">
      <NavBar />
      <h1 className="mt-4">Add New Song</h1>
      <form onSubmit={handleSubmit}>
        {/* Song Name */}
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="songName" className="form-label me-2">
            Song Name
          </label>
          <input
            type="text"
            className="form-control"
            id="songName"
            style={narrowerInputStyle}
            value={data.sname}
            onChange={(e) => setData({ ...data, sname: e.target.value })}
          />
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="dateReleased" className="form-label me-2">
            Released Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dateReleased"
            style={narrowerInputStyle}
            value={data.date}
            max={new Date().toISOString().split("T")[0]} // Set max date to today
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
        <div className="mb-3 row align-items-center">
          <div className="col-auto">
            <label htmlFor="artWork" className="form-label">
              Art Work
            </label>
          </div>
          <div className="col">
            <input
              type="file"
              className="form-control border-0"
              id="artWork"
              onChange={handleFileChange}
            />
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
              value={data.artists}
              onChange={(e) =>
                setData((f) => ({ ...f, artists: e.target.value }))
              }
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
          <button className="btn btn-outline-secondary me-2" type="reset">
            Cancel
          </button>
          <button type="submit" className="btn btn-secondary">
            Save
          </button>
        </div>
      </form>
      <AddArtist
        show={showAddArtistModal}
        onHide={() => setShowAddArtistModal(false)}
        onAddArtist={handleAddArtist}
      />
    </div>
  );
};

export default AddSongs;
