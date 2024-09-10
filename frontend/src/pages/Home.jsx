import React from "react";
import { SongData } from "../context/Song";
import AlbumItem from "../components/AlbumItem";
import SongItem from "../components/SongItem";

const Home = () => {
  const { songs, albums } = SongData();
  return (
    <>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto pb-2">
          {albums.map((e, i) => (
            <AlbumItem
              key={i}
              image={e.thumbnail.url}
              name={e.title}
              desc={e.description}
              id={e._id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songs.map((e, i) => (
            <SongItem
              key={i}
              image={e.thumbnail.url}
              name={e.title}
              desc={e.description}
              id={e._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
