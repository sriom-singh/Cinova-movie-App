import { Link, useNavigate } from "react-router-dom";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Card from "../partials/Card";
import ShimmerCard from "../ShimmerCard";

const Popular = () => {
    
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    // This will change title dynamically.
    document.title="Cinova - Popular- ("+ category+")";
  const [popular, setPopular] = useState([]);

  const GetPopular = async () => {
    try {
      setPopular([])
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
      console.log(data)
      setPopular(data.results);
      // setPopular((prevState)=>[...prevState,...data.results])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetPopular();
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
          Popular
        </h1>
        <TopNav />
      </div>
      <div className="w-full   max-h-fit gap-6 px-9 py mt-12 flex justify-end">
        <Dropdown
          title="Category"
          options={["movie", "person"]}
          func={(e) => setcategory(e.target.value)}
        />
  
      </div>

      {popular.length > 0 ? <Card data={popular} /> : <ShimmerCard />}

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

export default Popular;
