/* eslint-disable react/prop-types */

const Card = ({data}) => {
  return (
    <div className="w-full h-full flex flex-wrap gap-5 justify-center mt-4  p-4">

          {data.map((d, i) => (
          <div
            key={i}
            className="shadow-s mb-5 w-56  flex-col shadow-zinc-800 bg-center bg-cover rounded-md flex justify-start  items-end"
            // style={{
            //   background: `url(https://image.tmdb.org/t/p/original${d.poster_path})`,
            //   ...backgroundStyle,
           
            // }}
          >
            <img
              className="object-contain h-full  w-full "
              src={`https://image.tmdb.org/t/p/original${d.poster_path}`}
            ></img>
            <div className="z-10  flex flex-col justify-end duration-500  cursor-pointer rounded-md hover:opacity-100  m-auto opacity-60 text-white text-lg font-poppins font-thin  bg-[rgb(0,0,0,0.9)] p-3 w-full">
              <h1 className="truncate">
                {d?.name || d.title || d?.original_name || d.original_title}
              </h1>
              <p className="text-xs line-clamp-3 text-zinc-400">
                {d.overview || "This the best film ever made."}
              </p>
              <p className=" text-xs truncate mt-1 flex items-center text-zinc-400">
                <i className="ri-star-s-line  mr-1 text-yellow-400 text-base"></i>{" "}
                {d.vote_average || "N/A"}
                <i className="ri-global-line mr-1 ml-4 text-blue-400 text-base"></i>{" "}
                {d.original_language || "N/A"}
              </p>
            </div>
          </div>
              ))}

      </div>
  )
}

export default Card