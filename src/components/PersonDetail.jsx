import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

const PersonDetail = () => {
  const {id} = useParams();
  console.log(id);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  // This will change title dynamically.
  document.title = "Cinova - Persons- (" + category + ")";
  const [person, setPersons] = useState([]);
  const GetPersons = async () => {
    try {
      setPersons([]);
      const { data } = await axios.get(`/person/${id}`);
      console.log(data);
      setPersons(data.results);
      // setPersons((prevState)=>[...prevState,...data.results])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await GetPersons();
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [category, page]);

  return <div>PersonDetail</div>;
};

export default PersonDetail;
