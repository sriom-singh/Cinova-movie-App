import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

const TVShowDetail = () => {
  const {id} = useParams();
  console.log(id);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  // This will change title dynamically.
  document.title = "Cinova - TVShows- (" + category + ")";
  const [tv, setTVShows] = useState([]);
  const GetTVShows = async () => {
    try {
      setTVShows([]);
      const { data } = await axios.get(`/tv/${id}`);
      console.log(data);
      setTVShows(data.results);
      // setTVShows((prevState)=>[...prevState,...data.results])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetTVShows();
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [category, page]);

  return <div>TVShowDetail</div>;
};

export default TVShowDetail;
