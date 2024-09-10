import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import PlayListCard from "./PlayListCard";
import { UserData } from "../context/User";
import { RiAdminFill } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = UserData();
  return (
    <div className="w-[25%] h-full flex-col p-2 gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.home_icon} className="w-6" alt="" />
          <p className="font-bold relative group">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </p>
        </div>
        <div
          className="flex items-center gap-3 pl-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.search_icon} className="w-6" alt="" />
          <p className="font-bold relative group">
            Search
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img src={assets.stack_icon} className="w-8" alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={assets.arrow_icon} className="w-5" alt="" />
            <img src={assets.plus_icon} className="w-5" alt="" />
          </div>
        </div>
        <div onClick={() => navigate("/playlist")}>
          <PlayListCard />
        </div>
        <div className="p-4 m-2 bg-[#121212] rounded font-semibold text-[#e5e5e5c1] flex flex-col items-start justify-start gap-1 pl-4 ml-4 border-b border-gray-800">
          <h1>Let's findsome podcasts to follow</h1>
          <p>we'll keep you update on new episodes</p>

          <button className="px-4 py-1.5 hover:scale-105 bg-white transition-colors text-black text-[15px] rounded-2xl mt-4">
            <Link to={"https://open.spotify.com/genre/podcasts-web"}>
              Browse Podcasts
            </Link>
          </button>
        </div>
        {user && user.role === "admin" && (
          <button
            className="px-6 py-2 bg-white hover:scale-105 transition-colors text-black rounded-2xl mt-4 ml-5 flex items-center justify-center gap-2"
            onClick={() => navigate("/admin")}
          >
            <RiAdminFill size={20} />
            <h2 className="font-semibold text-[15px] ">Admin Dashboard</h2>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
