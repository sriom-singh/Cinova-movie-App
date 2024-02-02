/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Header = ({ data }) => {

  return (
    <div
      className="w-full h-[450px]  text-white flex flex-col justify-end items-start p-16 "
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.7),rgba(0,0,0,0.9)) ,url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-medium font-wix  text-5xl py-4 text-white">
        {data?.name || data.title || data?.original_name || data.original_title}
      </h1>
      <p className="text-base w-2/3 line-clamp-3 text-zinc-400">
        {data.overview || "This the best film ever made."}
      </p>
      <p className="text-sm flex pt-3 items-center">
        <i className="ri-calendar-line text-primary pr-2 text-xl text-center"></i>
        {data.release_date || "No information"}
        <i className="ri-movie-2-line text-primary pr-2 text-xl text-center ml-8"></i>
        {data.media_type}
      </p>
      <Link className="px-4  py-2 mt-4 bg-primary hover:bg-primary/50 duration-100 ">Watch Trailer</Link>
    </div>
  );
};

export default Header;
