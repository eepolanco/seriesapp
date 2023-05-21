import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../services/movie.service";
import { DetailsItem } from "../components/DetailsItem";

export const DetailsPage = () => {
  const [details, setDetails] = useState();
  const navigate = useNavigate();
  const { serieId } = useParams();

//   if (!serieId) return navigate("/");

  useEffect(() => {
    fetchDetailsEpisodes();
  }, [serieId]);

  const fetchDetailsEpisodes = async () => {
    const { tvShow } = await getDetails(serieId);
    setDetails(tvShow);
  };

  return (
        // This page will show all the details of the series/movies
      <div className="container animate__animated animate__fadeIn">
        {details &&
            <DetailsItem details={ details }/>
        }
      </div>
  )
}
