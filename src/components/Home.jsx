import { useEffect, useState } from "react";
import SideNav from "./partials/SideNav"
import TopNav from "./partials/TopNav"
import Header from "./partials/Header";
import axios from "../utils/axios"

const Home = () => {
    document.title="Cinova - Home";

    const [wallpaper,setWallpaper] = useState(null);
    const randomNumber = Math.floor(Math.random() * 21)    
    const getList = async() => {
      try{
        const {data} = await axios.get('trending/all/day');
        console.log(data);
       
        setWallpaper(data.results[randomNumber]);
       } catch(error){
        console.log(error)
      }
       }


    useEffect(()=>{
    !wallpaper && getList();
    },[wallpaper])


  return wallpaper ?(
    <>
        <SideNav />
    <div className="w-5/6 h-full ">
      <TopNav />
      <Header data={wallpaper} />
    </div>
    </>
  ):"loading"
}

export default Home;