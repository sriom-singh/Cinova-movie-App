import { Link, useNavigate } from "react-router-dom";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Card from "../partials/Card";
import ShimmerCard from "../shimmer/ShimmerCard";

const Movies = () => {
    
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    // This will change title dynamically.
    document.title="Cinova - Movies- ("+ category+")";
  const [movie, setMovies] = useState([]);

  const GetMovies = async () => {
    try {
      setMovies([])
      const { data } = await axios.get(
        `movie/${category}?page=${page}`
      );
      console.log(data)
      setMovies(data.results);
      // setMovies((prevState)=>[...prevState,...data.results])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetMovies();
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [category, page]);

  return (
    <div className="w-screen h-screen px-2 py-4 " >

      <div className="w-full h-16 z-50 fixed top-0 bg-secondary  flex gap-2 items-center">
        <Link
          onClick={() => navigate(-1)}
          className="text-zinc-200 hover:text-primary"
        >
          <i className="ri-arrow-left-s-line  text-4xl font-thin "></i>
        </Link>
        <h1 className="text-2xl font-wix text-zinc-200 font-medium mr-20">
          Movies
        </h1>
        <TopNav />
      </div>
      <div className="w-full   max-h-fit gap-6 px-9 py mt-12 flex justify-end">
        <Dropdown
          title="Category"
          options={["now_playing", "popular","top_rated","upcoming"]}
          func={(e) => setcategory(e.target.value)}
        />
  
      </div>

      {movie.length > 0 ? <Card data={movie} title='movie'  /> : <ShimmerCard />}

      <div className="w-full h-min flex p-4 justify-center gap-4">
        <h1
          onClick={() => setPage(1)}
          className="p-1 px-2 rounded-md bg-white cursor-pointer text-black "
        >
          1
        </h1>
        <h1
          onClick={() => setPage(2)}
          className="p-1 px-2 rounded-md bg-white cursor-pointer text-black "
        >
          2
        </h1>
        <h1
          onClick={() => setPage(3)}
          className="p-1 px-2 rounded-md bg-white cursor-pointer text-black "
        >
          3
        </h1>
      </div>
    </div>
  );
};

export default Movies;
