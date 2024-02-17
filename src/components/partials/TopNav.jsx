import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import image from "../../assets/no-image.jpg";

const TopNav = () => {
  return (
    <div className="w-full  h-16 absolute right-0 z-[1000] flex  first-letter: items-center justify-center">
      <div className="flex-1 gap-2 flex justify-end  h-full  items-center">
        <Link to={"/search"}>
          <i
            className="ri-search-line text-2xl px-4 -ml-1 py-1.5 text-zinc-200"
            aria-label="Search Icon"
          ></i>
        </Link>
        <Link to={'/auth'}> 
          <i className="ri-user-line text-2xl text-white mr-6 font-thin"></i>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
