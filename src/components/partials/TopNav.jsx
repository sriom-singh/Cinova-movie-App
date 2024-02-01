import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="w-full  h-16 relative flex  first-letter: items-center justify-center">
     <div className="flex-1 w-1/2 h-full flex justify-center items-center">   
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className=" text-sm py-4 w-2/3 h-8 bg-zinc-700 border-none px-4 text-zinc-200 outline-none rounded-sm"
        placeholder="Search 'Movies'"
        aria-label="Search Movies"
        value={query}
      />
      {query.length > 0 ? (
        <i
          className="ri-close-line text-xl bg-red-700 px-4 -ml-1 py-0.5 text-zinc-200"
          onClick={() => setQuery("")}
          aria-label="Close Icon"

        ></i>
      ):<i className="ri-search-line text-xl bg-primary px-4 -ml-1 py-0.5 text-zinc-200" aria-label="Search Icon"
      ></i>
    }
        </div>

      <div className="absolute w-[37.55%] max-h-96  top-3/4 overflow-auto">
        {/* <Link
          to=""
          className="px-6 py-3 border-b-2 border-zinc-500 inline-flex text-zinc-200 items-center bg-zinc-800 w-full "
        >
          <img src="" />
          <span>
            <h1 className="font-medium">Avatar</h1>
            <p className="text-xs">This the best film ever made.</p>
          </span>
        </Link> */}
      </div>
      <div className="flex-1  flex justify-end  h-full  items-center">
        <i className="ri-user-line text-2xl text-white mr-6 font-thin"></i>
        <i className="ri-login-box-line text-2xl text-white mr-12"></i>
        </div>
           
    </div>
  );
};

export default TopNav;
