import { Link, useNavigate } from "react-router-dom";
import TopNav from "../partials/TopNav";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Card from "../partials/Card";
import ShimmerCard from "../shimmer/ShimmerCard";

const People = () => {
  // This will change title dynamically.
  
  // States
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [category] = useState("popular");
  document.title = "Cinova - People- (" + category + ")";
  const [loading, setLoading] = useState(false);

  const [people, setPeople] = useState([]);

  const GetPeople = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`person/${category}?page=${page}`);
      // setPeople(data.results);
      setPeople((prevState)=>[...prevState,...data.results])
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetPeople();
    };

    fetchData();
  }, [category, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-screen h-screen px-2 py-4 ">
      <div className="w-full h-16 z-50 fixed top-0 bg-secondary  flex gap-2 items-center">
        <Link
          onClick={() => navigate(-1)}
          className="text-zinc-200 z-[10000] hover:text-primary"
        >
          <i className="ri-arrow-left-s-line  text-4xl font-thin "></i>
        </Link>
        <h1 className="text-2xl font-wix text-zinc-200 font-medium mr-20">
          Person
        </h1>
        <TopNav />
      </div>
      <div className="w-full   max-h-fit gap-6 px-9 py mt-12 flex justify-end"></div>

      {people.length > 0 ? (
        <>
        <Card data={people} title="person" />
        <div className="w-full h-min flex p-4 justify-center">
            <button
              onClick={handleLoadMore}
              className="p-2 px-4 w-2/3 rounded-md border-[1px] border-primary text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        </>
      ) : (
        <ShimmerCard />
      )}

    </div>
  );
};

export default People;
