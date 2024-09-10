import React, { useEffect, useRef, useState } from "react";
import { SongData } from "../context/Song";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { FaPause, FaPlay, FaVolumeDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const Player = () => {
  const {
    song,
    fetchSingleSong,
    selectedSong,
    isPlaying,
    setIsPlaying,
    nextMusic,
    prevMusic,
  } = SongData();

  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [previousVolume, setPreviousVolume] = useState(volume);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    fetchSingleSong();
  }, [selectedSong]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      if (!isSeeking) {
        setProgress(audio.currentTime);
      }
    };

    const handleEnded = async () => {
      await nextMusic(); // Ensure nextMusic is completed before proceeding
      setIsPlaying(true); // Ensure playback continues after switching
      audioRef.current.play(); // Start playing the next song
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetaData);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isSeeking, song, isPlaying, nextMusic]);

  useEffect(() => {
    // Play the new song when the selectedSong changes
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [selectedSong, isPlaying]);

  // When the user starts seeking
  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  // When the user releases the slider
  const handleSeekEnd = (e) => {
    setIsSeeking(false);
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  // Update the slider as the user drags it
  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    // audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const progressPercentage =
    !isNaN(progress) && !isNaN(duration) && duration > 0
      ? (progress / duration) * 100
      : 0;

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;

    setIsMuted(newVolume === 0);
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      setVolume(previousVolume);
      audioRef.current.volume = previousVolume;
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      audioRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  const renderVolumeIcon = () => {
    if (isMuted || volume == 0) {
      return <FaVolumeXmark />;
    } else if (volume > 0 && volume <= 0.5) {
      return <FaVolumeDown />;
    } else if (volume >= 0.51 && volume <= 1) {
      return <FaVolumeHigh />;
    }
  };

  return (
    <div>
      {song && (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
          <div
            className="lg:flex md:flex items-center gap-4 cursor-pointer border border-transparent hover:border-white rounded py-0.5 px-1"
            onClick={() => navigate("/playlist")}
          >
            <img
              src={
                song.thumbnail
                  ? song.thumbnail.url
                  : "https://via.placeholder.com/50"
              }
              className="w-16 h-14 object-cover rounded-sm"
              alt=""
            />
            <div className="hidden md:block w-36">
              <p>{song.title && song.title.slice(0, 12)}...</p>
              <p>{song.description && song.description.slice(0, 12)}...</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 m-auto">
            {song && song.audio && (
              <>
                {isPlaying ? (
                  <audio ref={audioRef} src={song.audio.url} autoPlay />
                ) : (
                  <audio ref={audioRef} src={song.audio.url} />
                )}
              </>
            )}

            <div className="w-full flex items-center font-thin text-green-400">
              <input
                type="range"
                min={"0"}
                max={"100"}
                className="progress-bar w-[120px] md:w-[300px] cursor-pointer"
                value={progressPercentage}
                onChange={handleProgressChange} // Update progress as the user drags
                onMouseDown={handleSeekStart} // Start seeking on mouse down
                onTouchStart={handleSeekStart} // Start seeking on touch start (for mobile)
                onMouseUp={handleSeekEnd} // Seek end on mouse up
                onTouchEnd={handleSeekEnd} // Seek end on touch end (for mobile)
              />
            </div>

            <div className="flex justify-center items-center gap-4">
              <span className="cursor-pointer" onClick={prevMusic}>
                <GrChapterPrevious />
              </span>
              <button
                className="bg-white text-black rounded-full p-3"
                onClick={handlePlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <span className="cursor-pointer" onClick={nextMusic}>
                <GrChapterNext />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div onClick={handleMuteToggle} className="cursor-pointer">
              {renderVolumeIcon()}
            </div>{" "}
            <input
              type="range"
              className="w-16 md:w-32 cursor-pointer"
              min={"0"}
              max={"1"}
              step={"0.01"}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
