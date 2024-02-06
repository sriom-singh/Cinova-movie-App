import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { CiGlobe } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import Shimmer from "./Shimmer";
import { FaImdb } from "react-icons/fa";

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  // const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  // const [category, setcategory] = useState("now_playing");
  // // This will change title dynamically.
  // document.title = "Cinova - Movies- (" + category + ")";
  // const [movie, setMovies] = useState([]);
  // const GetMovies = async () => {
  //   try {
  //     setMovies([]);
  //     const { data } = await axios.get(`movie/${id}`);
  //     console.log(data);
  //     setMovies(data.results);
  //     // setMovies((prevState)=>[...prevState,...data.results])
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    // await GetMovies();
    // window.scrollTo(0, 0);
    console.log(info);
    return () => {
      dispatch(removemovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgb(31, 30, 36,0.7),rgb(31, 30, 36)) ,url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
        backgroundSize: "100%",
        backgroundPosition: "top",
      }}
      className="w-screen h-screen px-4"
    >
      <nav>
        <Link
          onClick={() => navigate(-1)}
          className="text-zinc-200 hover:text-primary"
        >
          <i className="ri-arrow-left-s-line  text-4xl font-thin"></i>
        </Link>

        <div className="text-white flex gap-9 p-4 items-center">
          <a target="_blank" rel="noreferrer" href={info.detail.homepage}>
            <LuExternalLink size={24} />
          </a>
          <a target="_blank" rel="noreferrer" href={""}>
            <CiGlobe size={24} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.imdb.com/title/${info.externalId?.imdb_id}`}
            className="text-yellow-300"
          >
            <FaImdb size={24} fill="yellow" />
          </a>
        </div>
      </nav>
    </div>
  ) : (
    <Shimmer />
  );
};

export default MovieDetail;
