import { useEffect, useState } from "react";
import SideNav from "../partials/SideNav"
import TopNav from "../partials/TopNav"
import Header from "../partials/Header";
import axios from "../../utils/axios"
import HorizontalCards from "../partials/HorizontalCards";
import Dropdown from "../partials/Dropdown";
import Shimmer from "../Shimmer";


const Home = () => {
    document.title="Cinova - Home";

    const [wallpaper,setWallpaper] = useState(null);
    const [trending,setTrending] = useState(null);
    const[category,setCatgory] = useState('all');

    const getList = async() => {
      try{
        const {data} = await axios.get('trending/all/day');
       
        setWallpaper(data.results);
       } catch(error){
        console.log(error)
      }
       }

       const getTrending = async() => {
        try{
          const {data} = await axios.get(`trending/${category}/day`);
         
          setTrending(data.results);
         } catch(error){
          console.log(error)
        }
         }


    useEffect(()=>{
    !wallpaper && getList();
    getTrending();
 
    },[category])


  return (
    <div className="flex w-full overflow-hidden">
    <SideNav />
    <div className="w-5/6 h-full overflow-y-scroll ">
      <TopNav />

    { wallpaper&&trending?
    <>
      <Header data={wallpaper} />

    <div className="text-3xl flex gap-16 font-medium font-poppins mt-6 px-6 pr-8 -mb-3 text-zinc-300 ">
      <h1>Trending</h1> 
    <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setCatgory(e.target.value)} />
    </div>

    <HorizontalCards data={trending} /></>:<Shimmer />}
    </div>
    </div>
  )
}

export default Home;