import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);

  // Separate loading states
  const [loading, setLoading] = useState(false);
  const [songLoading, setSongLoading] = useState(false);
  const [albumLoading, setAlbumLoading] = useState(false);

  const [selectedSong, setSelectedSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function fetchSongs() {
    setSongLoading(true);
    try {
      const { data } = await axios.get("/api/song/all");

      setSongs(data);
      setSelectedSong(data[0]._id);
      setIsPlaying(false);
    } catch (error) {
      console.log(error);
    } finally {
      setSongLoading(false);
    }
  }

  const [song, setSong] = useState([]);

  async function fetchSingleSong() {
    try {
      const { data } = await axios.get("/api/song/single/" + selectedSong);

      setSong(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAlbums() {
    setAlbumLoading(true);
    try {
      const { data } = await axios.get("/api/song/album/all");
      setAlbums(data);
    } catch (error) {
      console.log(error);
    } finally {
      setAlbumLoading(false);
    }
  }

  async function addAlbum(formData, setTitle, setDescription, setFile) {
    setAlbumLoading(true);
    try {
      const { data } = await axios.post("/api/song/album/new", formData);
      toast.success(data.message);
      fetchAlbums();
      setTitle("");
      setDescription("");
      setFile(null);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setAlbumLoading(false);
    }
  }

  async function addSong(
    formData,
    setTitle,
    setDescription,
    setFile,
    setSinger,
    setAlbum
  ) {
    setSongLoading(true);
    try {
      const { data } = await axios.post("/api/song/new", formData);
      toast.success(data.message);
      fetchSongs();
      setTitle("");
      setDescription("");
      setFile(null);
      setSinger("");
      setAlbum("");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setSongLoading(false);
    }
  }

  async function addThumbnail(id, formData, setFile) {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/song/" + id, formData);
      toast.success(data.message);
      fetchSongs();
      setFile(null);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function deleteSong(id) {
    setSongLoading(true);
    try {
      const { data } = await axios.delete("/api/song/" + id);
      toast.success(data.message);
      fetchSongs();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setSongLoading(false);
    }
  }

  useEffect(() => {
    fetchSongs();
    fetchAlbums();
  }, []);

  const [index, setIndex] = useState(0);

  function nextMusic() {
    if (index === songs.length - 1) {
      setIndex(0);
      setSelectedSong(songs[0]._id);
    } else {
      setIndex(index + 1);
      setSelectedSong(songs[index + 1]._id);
    }
  }

  function prevMusic() {
    if (index === 0) {
      return null;
    } else {
      setIndex(index - 1);
      setSelectedSong(songs[index - 1]._id);
    }
  }

  const [albumSong, setAlbumSong] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  async function fetchAlbumSong(id) {
    try {
      const { data } = await axios.get("/api/song/album/" + id);
      setAlbumSong(data.songs);
      setAlbumData(data.album);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SongContext.Provider
      value={{
        songs,
        albums,
        addAlbum,
        addSong,
        addThumbnail,
        deleteSong,
        loading,
        songLoading,
        albumLoading,
        fetchSingleSong,
        song,
        selectedSong,
        setSelectedSong,
        isPlaying,
        setIsPlaying,
        nextMusic,
        prevMusic,
        fetchAlbumSong,
        albumData,
        albumSong,
        fetchAlbums,
        fetchSongs,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export const SongData = () => useContext(SongContext);
