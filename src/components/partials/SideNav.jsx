
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png';

const SideNav = () => {



  return (
    <div className="w-1/6 h-full border-r-2 border-zinc-700 p-3 px-6" >
        <h1 className="text-2xl flex text-white font-medium tracking-tighter border-b-[1px] border-zinc-500 py-4 ">
            {/* <i className=" text-primary ri-film-fill mr-2" /> */}
            <img className="mr-2 w-8" src={logo}></img>
            <span className="font-poppins">Cinova</span>
        </h1>
        <nav className="flex flex-col gap-1 font-wix ">
            <h1 className="text-white text- mt-8 pb-2 border-b-[1px] border-zinc-700 mb-2 ">Menu</h1>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200 flex items-center align-middle"><i className="ri-home-5-line  mr-1"></i> Home</Link>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200 flex items-center text-middle"><i className="ri-information-line  mr-1"></i> About</Link>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200 flex items-center"><i className="ri-phone-line  mr-1" ></i> Contact</Link>
  
        </nav>
        <nav className="flex flex-col gap-1 ">
            <h1 className="text-white  mt-4 pb-2 border-b-[1px] border-zinc-700 mb-2  ">New Feeds</h1>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200"><i className=" ri-fire-line "></i> Trending</Link>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200"><i className="ri-bard-fill"></i> Popular</Link>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200"><i className="ri-movie-2-line"></i> Movies</Link>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200"><i className="ri-tv-line"></i> Tv Shows</Link>
            <Link className="text-zinc-300 hover:bg-primary text-sm p-2 rounded-sm duration-200"><i className="ri-team-line"></i> People</Link>


        </nav>
    </div>
  )
}

export default SideNav