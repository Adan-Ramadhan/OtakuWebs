import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailEpisodeContext } from "../Context/DetailEpisode";

const DetailEpisodePage = () => {

const {slug, episode} = useParams()
const {fetchDetailEpisode, detailEpisode} = useContext(DetailEpisodeContext);

useEffect(() => {

fetchDetailEpisode(slug, episode)

}, [])

  return (
    <div>Detail Episode page</div>
  )
}

export default DetailEpisodePage;