import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/album/" + id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[rgba(255,255,255,0.15)]"
    >
      <img src={image} className="rounded w-[150px] h-[150px] object-cover" alt="" />
      <p className="font-bold mt-2 mb-1">{name.slice(0, 12)}..</p>
      <p className="text-slate-400 text-sm">{desc.slice(0, 18)}..</p>
    </div>
  );
};

export default AlbumItem;
