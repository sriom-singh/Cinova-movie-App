import { Link, useNavigate } from "react-router-dom";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useState,useEffect } from "react";
import axios from "../../utils/axios";
import Card from "../partials/Card";

const Trending = () => {
  const [page,setPage] =useState(1)
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, setTrending] = useState([]);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}`);
      console.log(data);
      // setTrending(data.results);
      setTrending((prevState)=>[...prevState,...data.results])
      setPage(page+1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    GetTrending();
  },[duration,category])
 return (
  trending.length>0 && 
    <div className="w-screen h-screen px-2 py-4 ">
      <div className="w-full h-16  flex gap-2 items-center">
        <Link
          onClick={() => navigate(-1)}
          className="text-zinc-200 hover:text-primary"
        >
          <i className="ri-arrow-left-s-line  text-4xl font-thin "></i>
        </Link>
        <h1 className="text-2xl font-wix text-zinc-200 font-medium mr-20">
          Trending
        </h1>
        <TopNav />
      </div>
      <div className="w-full max-h-fit gap-6 px-9 py flex justify-end">
        
        <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=>setcategory(e.target.value)} />
        <Dropdown title="Duration" options={["week", "day"]} func={(e)=>setduration(e.target.value)} />
      </div>


      <Card data={trending}/>
      

    </div>
  );
};

export default Trending;
