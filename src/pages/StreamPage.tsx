import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import type { streamTypes } from "../types/streamType";
import Loading from "../components/Loading";

const StreamPage = () => {
  const params = useParams();
  const slug = params.slug || "";

  const [isStream, setIsStream] = useState<streamTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  //   const [isFrame, setIsFrame] = useState(isStream?.iframe);
  //   const [isSelectedQuality, setIsSelectedQuality] = useState<string>("m480p");

  //   const defaultServer = `https://desustream.info/dstream/otakuwatch5/v3/index.php?id=ZnJHZlFJcDZQZHd5TnEwaVUzUDZqQT09`;

  useEffect(() => {
    async function fetchStream() {
      try {
        setIsLoading(true);
        const data = await api.getEpisodes(slug);
        setIsStream(data);
        console.log("detail episod:", data);
      } catch (error) {
        console.log(error);

        if (error instanceof Error) {
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchStream();
  }, []);
  if (isLoading) return <Loading />;
  if (isError) return <p className="text-red-500">⚠️ {isError}</p>;
  if (!isStream) return <p>No Stream Found</p>;

  return (
    <div className="w-full">
      <div className="w-full md:w-3/4 xl:w-1/2 md:mx-auto p-3 ">
        <div className="w-full h-96 mx-auto md:h-[460px] overflow-hidden rounded-xl">
          <iframe
            src={isStream.iframe}
            allowFullScreen
            className="w-full h-full"
            title={isStream.judul}
          ></iframe>
        </div>

        <div className="w-full text-center mt-40">
          <h1 className="text-3xl font-bold">On Developing</h1>
        </div>

        {/* <div className="w-full max-w-4xl">
          <label htmlFor="dropdown">Mirror:</label>
          <select id="dropdow" value={""} onChange={""}>
            <option value={""} disabled>
              -- pilih quality --
            </option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default StreamPage;
