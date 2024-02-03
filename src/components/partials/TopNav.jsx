import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from '../../utils/axios'
import image from '../../assets/no-image.jpg'

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [search, setSearches] = useState([]);


  useEffect(()=>{
  const getSearches = async()=>{
    try{
      const {data} = await axios.get(`search/multi?query=${query}`)
      setSearches(data.results);
    }catch(error){
      console.log(error)
    }
  }
  getSearches()

  },[query])

  return (
    <div className="w-full  h-16 relative flex  first-letter: items-center justify-center">
     <div className="flex-1 w-1/2 h-full flex justify-center ml-3 items-center">   
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className=" text-sm py-4 w-2/3 h-10 bg-zinc-700 border-none px-4 text-zinc-200 outline-none rounded-sm"
        placeholder="Search 'Movies'"
        aria-label="Search Movies"
        value={query}
      />
      {query.length > 0 ? (
        <i
          className="ri-close-line text-xl bg-red-700 px-4 -ml-1 py-1.5 text-zinc-200"
          onClick={() => setQuery("")}
          aria-label="Close Icon"

        ></i>
      ):<i className="ri-search-line text-xl bg-primary px-4 -ml-1 py-1.5 text-zinc-200" aria-label="Search Icon"
      ></i>
    }
        </div>

    <div className="absolute w-[37.5%] max-h-96 left-20 top-3/4 overflow-auto z-50">

            { search.map((m,i)=>(<Link
                to=""
                key={i}
                className="px-6 py-3 border-b-2 border-zinc-500 inline-flex text-zinc-200 items-center bg-zinc-900 w-full "
              >
                <img className="w-12 h-12 mr-5 shadow-sm object-cover rounded-sm mr" 
                src={
                  m.backdrop_path || m.profile_path? `https://image.tmdb.org/t/p/original${m.backdrop_path || m.profile_path}`:image }/>
                <span>
                  <h1 className="font-medium truncate w-64 ">{m?.name ||m.title ||m?.original_name || m.original_title}</h1>
                  <p className="text-xs line-clamp-1 w-68 text-zinc-400">{m.overview ||"This the best film ever made."}</p>
                </span>
              </Link>))
            }

        
      
      </div>
      <div className="flex-1  flex justify-end  h-full  items-center">
        <i className="ri-user-line text-2xl text-white mr-6 font-thin"></i>
        <i className="ri-login-box-line text-2xl text-white mr-12"></i>
        </div>
           
    </div>
  );
};

export default TopNav;
