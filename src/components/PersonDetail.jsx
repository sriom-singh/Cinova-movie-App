import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { LuExternalLink } from "react-icons/lu";
import DetailPage from "./shimmer/DetailPage";
import { FaWikipediaW } from "react-icons/fa";
import { FaImdb } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { IoPlayOutline } from "react-icons/io5";
import HorizontalCards from "./partials/HorizontalCards";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);

  const dispatch = useDispatch();

  console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));
    // await GetPersons();
    // window.scrollTo(0, 0);
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(to right ,rgb(0, 0, 0),rgb(1, 0, 6,0.7),rgb(31, 30, 36,0.2)) ,url(https://image.tmdb.org/t/p/original/${info.combinedCredits.cast[0].backdrop_path})`,
        backgroundSize: "100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        filter: blur("28px"),
      }}
      className="w-screen  px-4 "
    >
      <div className="w-full backdrop-blur-[2px] ">
        <nav className="pt-4 flex justify-between">
          <Link
            onClick={() => navigate(-1)}
            className="text-zinc-200 text-2xl gap-2 flex items-center hover:text-primary"
          >
            <i className="ri-arrow-left-s-line  text-4xl  font-thin"> </i>
          </Link>

          <div className="text-white justify-end flex gap-9 p-4 items-center">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <FaWikipediaW size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/name/${info.externalId?.imdb_id}`}
              className=" hover:scale-110 "
            >
              <FaImdb size={24} />
            </a>
            <a
              target="_blank"
              className="hover:scale-110"
              rel="noreferrer"
              href={info.detail.homepage}
            >
              <LuExternalLink size={24} />
            </a>
          </div>
        </nav>

        <div className="w-full h-full my-auto flex flex-col  ">
          <div className="flex px-20 py-8 gap-8">
            <img
              title={info.detail.name}
              className="object-contain h-[400px] rounded-lg border-y-2 shadow-xl"
              src={`https://image.tmdb.org/t/p/original${
                info.detail.poster_path ||
                info.detail.backdrop_path ||
                info.detail.profile_path
              }`}
            />
            <div className="p-2 flex font-poppins flex-col gap-4 pt-4">
              <h1 className="font-wix uppercase tracking-wide font-bold text-4xl  text-white">
                {info.detail.title || info.detail.name}
              </h1>

              <h1 className=" mr-1 text-zinc-400 text-sm flex items-center gap-1  font-light">
                Place of birth -
                <p className="font-normal text-zinc-200">
                  {info.detail.place_of_birth ||
                    "This the best film ever made."}
                </p>
              </h1>
              <h1 className=" mr-1 text-zinc-400 text-sm flex items-center gap-1  font-light">
                Known for -
                <p className="font-semibold text-zinc-200 ">
                  {info.detail.known_for_department ||
                    "This the best film ever made."}
                </p>
              </h1>
              <h1 className=" mr-1 text-zinc-400 text-sm flex items-center gap-1 font-light">
                DOB -
                <p className=" font-normal text-zinc-200">
                  {info.detail.birthday || "N/A"}
                </p>
              </h1>

              <h1 className="text-sm leading-6 w-full max-h-min overflow-hidden line-clamp-5 font-normal text-zinc-200">
                <p className=" mb-1 text-zinc-400 text-xl flex items-center gap-1 font-normal">
                  Biography
                </p>

                {info.detail.biography || "This the best film ever made."}
              </h1>
              <div className="text-purple-400 justify-start flex gap-8  items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110"
                  href={`https://twitter.com/${info.externalId.twitter_id}`}
                >
                  <BsTwitterX size={24} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.instagram.com/${info.externalId?.instagram_id}`}
                  className=" hover:scale-110 "
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  target="_blank"
                  className="hover:scale-110"
                  rel="noreferrer"
                  href={`https://www.tiktok.com/discover/${info.detail.homepage}`}
                >
                  <IoLogoTiktok size={24} />
                </a>
                <a
                  target="_blank"
                  className="hover:scale-110"
                  rel="noreferrer"
                  href={`https://www.facebook.com/${info.externalId.facebook_id}`}
                >
                  <FaFacebook size={24} />
                </a>
              </div>

              {/* <Link
                to={`${pathname}/trailer`}
                className="border-[1px] flex items-center justify-center hover:text-purple-500 gap-1 text-sm w-28 py-2 text-white border-primary text-center  rounded-md "
              >
                <IoPlayOutline size={20} /> Play Trailer
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <DetailPage />
  );
};

export default PersonDetail;
