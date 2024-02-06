/* eslint-disable react/prop-types */
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ data,title }) => {
  return (
    <div className="w-full min-h-full flex flex-wrap gap-5 justify-center mt-4  p-4">

      {data.map((d, i) => (
        <Link to={`/${title}/${d.id}`}
          key={i}
          className="shadow-s mb-5 w-56  flex-col shadow-zinc-800 bg-center bg-cover rounded-md flex justify-start  items-end"
          // style={{
          //   background: `url(https://image.tmdb.org/t/p/original${d.poster_path})`,
          //   ...backgroundStyle,

          // }}
        >
          <img
            className="object-contain h-full  w-full "
            src={`https://image.tmdb.org/t/p/original${
              d.poster_path || d.profile_path
            }`}
          ></img>
          <div className="z-10  flex flex-col justify-end duration-500 cursor-pointer rounded-md hover:opacity-100  m-auto opacity-60 text-white text-lg font-poppins font-thin  bg-[rgb(0,0,0,0.9)] p-3 w-full">
            <h1 className="truncate ">
              {d?.name || d.title || d?.original_name || d.original_title}
            </h1>
            <p className="text-xs line-clamp-3 mb-1 text-zinc-400">
              {d.overview ||
                d.known_for_department ||
                "This the best film ever made."}
            </p>
            <div className=" text-xs truncate mt-1 flex items-center text-center text-zinc-400">
              <i className="ri-star-s-line  text-yellow-400 text-base"></i>{" "}
              {d.vote_average || d.popularity || "N/A"}
              <p className=" ml-3 text-blue-400 text-base">
                <IoLanguageOutline />
              </p>{" "}
              {d.original_language || "N/A"}
              <i className="ri-calendar-line mr-1 ml-4 text-purple-400 text-base"></i>
              {d.release_date || "N/A"}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
