import React, { useState } from "react";
import { UserData } from "../context/User";
import { Link, useNavigate } from "react-router-dom";
import { SongData } from "../context/Song";
import { MdDelete } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const Admin = () => {
  const { user } = UserData();
  const {
    albums,
    songs,
    addAlbum,
    loading,
    songLoading,
    albumLoading,
    addSong,
    addThumbnail,
    deleteSong,
  } = SongData();

  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  // Separate state for album form
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");
  const [albumFile, setAlbumFile] = useState(null);

  // Separate state for song form
  const [songTitle, setSongTitle] = useState("");
  const [songDescription, setSongDescription] = useState("");
  const [songFile, setSongFile] = useState(null);
  const [singer, setSinger] = useState("");
  const [album, setAlbum] = useState("");

  // File change handlers for both forms
  const albumFileChangeHandler = (e) => {
    const file = e.target.files[0];
    setAlbumFile(file);
  };

  const songFileChangeHandler = (e) => {
    const file = e.target.files[0];
    setSongFile(file);
  };

  // Album form submit handler
  const addAlbumHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", albumTitle);
    formData.append("description", albumDescription);
    formData.append("file", albumFile);

    addAlbum(formData, setAlbumTitle, setAlbumDescription, setAlbumFile);
  };

  // Song form submit handler
  const addSongHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", songTitle);
    formData.append("description", songDescription);
    formData.append("singer", singer);
    formData.append("album", album);
    formData.append("file", songFile);

    addSong(
      formData,
      setSongTitle,
      setSongDescription,
      setSongFile,
      setSinger,
      setAlbum
    );
  };

  const addThumbnailHandler = (id) => {
    const formData = new FormData();
    formData.append("file", songFile);

    addThumbnail(id, formData, setSongFile);
  };

  const deleteHandler = (id) => {
    if (confirm("Are you sure? You want to delete this Song!")) {
      deleteSong(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white p-4 py-8 sm:p-8">
      <Link
        to={"/"}
        className="bg-green-500 text-white rounded-full py-2 px-4 font-bold flex items-center justify-center w-52 gap-2"
      >
        <FaArrowLeft className="font-bold" />
        Go To Home Page
      </Link>
      {/* Album Form:--- */}
      <h2 className="text-3xl font-bold my-6 text-center">Add Album</h2>
      <form
        onSubmit={addAlbumHandler}
        className="bg-[#181818] shadow-lg p-4 sm:p-6 rounded-lg max-w-xl mx-auto"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="auth-input w-full"
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            placeholder="Description"
            className="auth-input w-full"
            value={albumDescription}
            onChange={(e) => setAlbumDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Thumbnail</label>
          <input
            type="file"
            className="auth-input w-full"
            accept="image/*"
            onChange={albumFileChangeHandler}
            required
          />
        </div>

        <button disabled={albumLoading} className="auth-btn w-full">
          {albumLoading ? "Please wait..." : "Add"}
        </button>
      </form>

      {/* Songs Form:--- */}

      <h2 className="text-3xl font-bold my-6 text-center">Add Songs</h2>
      <form
        onSubmit={addSongHandler}
        className="bg-[#181818] shadow-lg p-4 sm:p-6 rounded-lg max-w-xl mx-auto"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="auth-input w-full"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            placeholder="Description"
            className="auth-input w-full"
            value={songDescription}
            onChange={(e) => setSongDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Singer</label>
          <input
            type="text"
            placeholder="Singer"
            className="auth-input w-full"
            value={singer}
            onChange={(e) => setSinger(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Album</label>
          <select
            className="auth-input w-full"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          >
            <option value="">Choose Album</option>
            {albums &&
              albums.map((e, i) => (
                <option value={e._id} key={i}>
                  {e.title}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Audio</label>
          <input
            type="file"
            className="auth-input w-full"
            accept="audio/*"
            onChange={songFileChangeHandler}
            required
          />
        </div>

        <button disabled={songLoading} className="auth-btn w-full">
          {songLoading ? "Please wait..." : "Add"}
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Added Songs</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center sm:justify-center md:justify-start text-center">
          {songs &&
            songs.map((e, i) => (
              <div
                key={i}
                className="bg-[#181818] rounded-lg p-4 shadow-md mx-auto w-full max-w-sm"
              >
                {e.thumbnail ? (
                  <img
                    src={e.thumbnail.url}
                    alt=""
                    className="w-full h-60 object-cover rounded"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center gap-2">
                    <input
                      type="file"
                      id="file-upload"
                      onChange={songFileChangeHandler}
                      className="w-full my-2 hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Upload File
                    </label>
                    <button
                      onClick={() => addThumbnailHandler(e._id)}
                      className="bg-green-500 hover:bg-green-600 text-black px-2 py-1 rounded"
                      disabled={loading}
                    >
                      {loading ? "Please wait..." : "Add Thumbnail"}
                    </button>
                  </div>
                )}
                <h4 className="text-lg font-bold mt-2">{e.title}</h4>
                <h4 className="text-sm text-gray-500">{e.singer}</h4>
                <h4 className="text-sm text-gray-500">{e.description}</h4>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      deleteHandler(e._id);
                    }}
                    className="flex items-center justify-center px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded mt-2"
                  >
                    <MdDelete /> Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
