/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLanguageOutline } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HorizontalCards = ({ data }) => {

  return (
    <div className="w-full h-96 overflow-x-hidden overflow-hidden p-4">
      <hr className="opacity-15 my-2"></hr>
      <Swiper
        slidesPerView={1}
        spaceBetween={6}
        navigation={true}
        scrollbar={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 12,
          },
        }}
        modules={[Pagination, Navigation]}
        className="h-[90%] p-3"
      >
        {data.map((d, i) => (
          <SwiperSlide
            key={i}
            className="shadow-s   relative shadow-zinc-800 bg-center bg-cover rounded-md flex justify-start  items-end"
            // style={{
            //   background: `url(https://image.tmdb.org/t/p/original${d.poster_path})`,
            //   ...backgroundStyle,
           
            // }}
          >
            <img
              className="object-cover h-full absolute w-full "
              src={`https://image.tmdb.org/t/p/original${d.poster_path}`}
            ></img>
            <div className="z-10 absolute flex flex-col justify-end duration-500 h-full cursor-pointer rounded-md hover:opacity-100  m-auto opacity-0 text-white text-lg font-poppins font-thin  bg-[rgb(0,0,0,0.9)] p-3 w-full">
              <h1 className="truncate">
                {d?.name || d.title || d?.original_name || d.original_title}
              </h1>
              <p className="text-xs line-clamp-3 text-zinc-400">
                {d.overview || "This the best film ever made."}
              </p>
              <p className=" text-xs truncate mt-1 flex items-center text-zinc-400">
                <i className="ri-star-s-line  mr-1 text-yellow-400 text-base"></i>{" "}
                {d.vote_average || "N/A"}
                <p className=" mr-1 ml-4 text-blue-400 text-base"><IoLanguageOutline/></p>{" "}
                {d.original_language || "N/A"}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalCards;
