import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserData } from "../context/User";
import { TbMenu2 } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logoutUser } = UserData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = UserData();

  return (
    <>
      <div className="w-full flex items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl hover:bg-[#88878713]"
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl hover:bg-[#88878713]"
            alt=""
            onClick={() => navigate(+1)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white hover:scale-105 transition-colors text-black text-[15px] px-4 py-1.5 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-white hover:scale-105 transition-colors text-black text-[15px] px-4 py-1.5 rounded-2xl hidden md:block cursor-pointer">
            <Link to={"https://www.spotify.com/in-en/download/windows/"}>
              Install App
            </Link>
          </p>
          <p
            className="bg-white hover:scale-105 text-black text-[15px] px-4 py-1.5 rounded-2xl md:flex hidden cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
            onClick={logoutUser}
          >
            <MdLogout size={20} /> Logout
          </p>

          <div className="md:hidden relative">
            <button
              className="bg-white text-black text-[15px] px-3 py-1 rounded-lg cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <TbMenu2 size={20} className="font-bold" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-full right-0 bg-white shadow-md rounded p-4 w-48">
                <h4 className="text-center text-black border-b border-slate-400 mb-2">
                  Profile
                </h4>
                <p className="text-black text-center text-[15px] capitalize">
                  UserName : {user.name}
                </p>{" "}
                <p className="text-center text-[14px] text-gray-600 capitalize">
                  Role : {user.role}
                </p>{" "}
                <div className="text-[#121212] text-[15px] flex justify-center cursor-pointer mt-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 transition-colors px-2 py-1 rounded flex items-center justify-center gap-1"
                    onClick={logoutUser}
                  >
                    <MdLogout size={20} /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 gap-2 py-1.5 bg-[#121212] overflow-auto">
        <p
          className={`cursor-pointer px-4 py-1 rounded-2xl ${
            location.pathname === "/" ? "bg-white text-black" : "bg-black"
          }`}
        >
          <Link to="/">All</Link>
        </p>
        <p
          className={`cursor-pointer px-4 py-1 rounded-2xl hidden md:block ${
            location.pathname === "/playlist"
              ? "bg-white text-black"
              : "bg-black"
          }`}
        >
          <Link to="/playlist">Music</Link>
        </p>
        <p
          className={`cursor-pointer px-4 py-1 rounded-2xl hidden md:block ${
            location.pathname === "https://open.spotify.com/genre/podcasts-web"
              ? "bg-white text-black"
              : "bg-black"
          }`}
        >
          <Link to="https://open.spotify.com/genre/podcasts-web">Podcasts</Link>
        </p>
        <p
          onClick={() => navigate("/playlist")}
          className={`cursor-pointer px-4 py-1 rounded-2xl md:hidden ${
            location.pathname === "/playlist"
              ? "bg-white text-black"
              : "bg-gray-90"
          }`}
        >
          PlayList
        </p>
        <p
          onClick={() => navigate("/admin")}
          className={`cursor-pointer px-4 py-1 rounded-2xl md:hidden ${
            location.pathname === "/admin"
              ? "bg-white text-black"
              : "bg-gray-90"
          } ${user.role === "admin" ? "flex whitespace-nowrap" : "hidden"}`}
        >
          Admin-Panel
        </p>
        <Link
          to={"https://open.spotify.com/genre/podcasts-web"}
          className={`cursor-pointer px-4 py-1 rounded-2xl md:hidden flex whitespace-nowrap ${
            location.pathname === "https://open.spotify.com/genre/podcasts-web"
              ? "bg-white text-black"
              : "bg-gray-90"
          }`}
        >
          Browse Padcasts
        </Link>
        <Link
          to={"https://www.spotify.com/in-en/download/windows/"}
          className={`cursor-pointer px-4 py-1 rounded-2xl md:hidden flex whitespace-nowrap ${
            location.pathname ===
            "https://www.spotify.com/in-en/download/windows/"
              ? "bg-white text-black"
              : "bg-gray-90"
          }`}
        >
          Install App
        </Link>
      </div>
    </>
  );
};

export default Navbar;
