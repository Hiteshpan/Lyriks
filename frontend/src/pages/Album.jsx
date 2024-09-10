import React, { useEffect } from "react";
import { SongData } from "../context/Song";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { UserData } from "../context/User";
import { FaBookmark, FaPlay } from "react-icons/fa";

const Album = () => {
  const navigate = useNavigate();
  const {
    fetchAlbumSong,
    albumData,
    albumSong,
    setSelectedSong,
    setIsPlaying,
  } = SongData();

  const params = useParams();

  useEffect(() => {
    fetchAlbumSong(params.id);
  }, [params.id]);

  const onclickHandler = (id) => {
    setSelectedSong(id);
    setIsPlaying(true);
  };

  const { addToPlaylist } = UserData();

  const savePlayListHandler = (id) => {
    addToPlaylist(id);
  };

  return (
    <>
      {albumData && (
        <>
          <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-center">
            {albumData.thumbnail && (
              <img
                src={albumData.thumbnail.url}
                className="w-48 h-48 rounded object-cover"
                alt=""
              />
            )}
            <div className="flex flex-col">
              <p>Playlist</p>
              <h2 className="text-3xl font-bold mb-4 md:text-5xl">
                {albumData.title} PlayList
              </h2>
              <h4>{albumData.description}</h4>
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
            <p>Artist</p>
            <p className="hidden sm:block">Description</p>
            <p className="text-center">Actions</p>
          </div>
          <hr />
          {albumSong.length === 0 ? (
            <div className="flex items-center justify-center p-4">
              <button
                onClick={() => navigate("/admin")}
                className="bg-green-500 py-2 px-6 rounded-md hover:bg-green-600"
              >
                Let's Add Songs
              </button>
            </div>
          ) : (
            albumSong &&
            albumSong.map((e, i) => (
              <div
                className="grid grid-cols-3 sm:grid-cols-4 mt-3 mb-4 pl-2 py-3 rounded text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
                key={e._id}
              >
                <div className="text-white">
                  <b className="mr-4 text-[#a7a7a7]">{i + 1}.</b>
                  <img
                    src={e.thumbnail?.url || "https://via.placeholder.com/250"}
                    className="inline w-10 mr-5 object-cover object-center"
                    alt={e.title || "Song Thumbnail"}
                  />
                  <p className="inline-block text-center text-[13px] md:text-base mx-2.5 md:mx-0">
                    {e.title ? `${e.title.slice(0, 15)}...` : "No Title"}
                  </p>
                </div>
                <p className="md:text-[15px] content-center text-[13px]">
                  {e.singer || "Unknown Singer"}
                </p>
                <p className="text-[15px] hidden sm:block content-center">
                  {e.description
                    ? `${e.description.slice(0, 20)}...`
                    : "No Description"}{" "}
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
                    onClick={() => onclickHandler(e._id)}
                  >
                    <FaPlay />
                  </p>
                </div>
              </div>
            ))
          )}
        </>
      )}
    </>
  );
};

export default Album;
