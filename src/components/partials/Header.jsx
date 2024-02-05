/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = ({ data }) => {
  
  return (
    <div
      className="w-full h-[400px]  text-white flex flex-col justify-end items-start "
    
    >
      {/* <h1 className="font-medium font-wix  text-5xl py-4 text-white">
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
      <Link className="px-4  py-2 mt-4 bg-primary hover:bg-primary/50 duration-100 ">Watch Trailer</Link> */}
       <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
      
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full "
      >
   
        {data.map((d,i)=>(
             <SwiperSlide key={i} className="flex flex-col justify-end p-16"   style={{
              background: `linear-gradient(rgba(0,0,0,0.2),rgb(31, 30, 36,0.7),rgb(31, 30, 36)) ,url(https://image.tmdb.org/t/p/original${d.backdrop_path})`,
              backgroundSize: "100%",
              backgroundPosition: "top",
            }} >
             <h1 className="font-medium font-wix  text-5xl py-4 text-white">
               {d?.name || d.title || d?.original_name || d.original_title}
             </h1>
             <p className="text-base w-2/3 line-clamp-3 text-zinc-400">
               {d.overview || "This the best film ever made."}
             </p>
             <p className="text-sm flex pt-3 items-center">
               <i className="ri-calendar-line text-primary pr-2 text-xl text-center"></i>
               {d.release_date || "N/A"}
               <i className="ri-movie-2-line text-primary pr-2 text-xl text-center ml-8"></i>
               {d.media_type}
             </p>
             <Link className="px-4  py-2 mt-4 w-32 bg-primary hover:bg-primary/50 duration-100 ">Watch Trailer</Link> 
             </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Header;
