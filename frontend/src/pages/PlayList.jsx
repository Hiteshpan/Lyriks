import React, { useEffect, useState } from "react";
import { SongData } from "../context/Song";
import { assets } from "../assets/assets";
import { FaBookmark, FaPlay } from "react-icons/fa";
import { UserData } from "../context/User";

const PlayList = ({ user }) => {
  const { songs, setSelectedSong, setIsPlaying } = SongData();

  const [myPlaylist, setMyPlaylist] = useState([]);

  useEffect(() => {
    if (songs && user && Array.isArray(user.playlist)) {
      const filteredSongs = songs.filter((e) =>
        user.playlist.includes(e._id.toString())
      );
      setMyPlaylist(filteredSongs);
    }
  }, [songs, user]);

  const onclickHander = (id) => {
    // console.log(setSelectedSong, setIsPlaying);
    setSelectedSong(id);
    setIsPlaying(true);
  };

  const { addToPlaylist } = UserData();

  const savePlayListHandler = (id) => {
    addToPlaylist(id);
  };

  return (
    <>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
        {myPlaylist && myPlaylist[0] ? (
          <img
            src={myPlaylist[0].thumbnail.url}
            className="w-48 h-48 rounded object-cover"
            alt=""
          />
        ) : (
          <img
            src="https://via.placeholder.com/250"
            className="w-48 h-48 rounded object-cover"
            alt=""
          />
        )}

        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-3xl font-bold mb-4 md:text-5xl capitalize">
            {user.name}'s PlayList
          </h2>
          <h4>Your Favourite Songs</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              className="inline-block w-6"
              alt=""
            />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
        </p>
        <p className="text-center md:text-start">Artist</p>
        <p className="hidden sm:block">Description</p>
        <p className="text-center">Actions</p>
      </div>
      <hr />
      {myPlaylist &&
        myPlaylist.map((e, i) => (
          <div
            className="grid grid-cols-3 sm:grid-cols-4 mt-2 mb-4 pl-2 py-3 rounded text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            key={i}
          >
            <div className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{i + 1}.</b>
              <img
                src={e.thumbnail.url}
                className="inline w-10 h-10 mr-5 object-cover"
                alt=""
              />
              <div className="inline-block text-center text-[13px] md:text-base mx-2.5 md:mx-0">
                {e.title && e.title.slice(0, 15)}...
              </div>
            </div>
            <p className="md:text-[15px] md:text-start text-center content-center text-[13px]">
              {e.singer}
            </p>
            <p className="text-[15px] hidden sm:block content-center">
              {e.description.slice(0, 20)}...
            </p>
            <div className="flex justify-center items-center gap-5">
              <p
                className="text-[15px] text-center"
                onClick={() => savePlayListHandler(e._id)}
              >
                <FaBookmark />
              </p>
              <p
                className="text-[15px] text-center"
                onClick={() => onclickHander(e._id)}
              >
                <FaPlay />
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default PlayList;
