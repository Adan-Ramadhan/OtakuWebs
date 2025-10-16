import { useEffect, useState } from "react";
import api from "../services/api";

const OngoingPage = () => {
  const [isOngoing, setIsOngoing] = useState();

  const fetchDataOnging = async () => {
    try {
      const res = await api.get("/anime?type=ongoing");

      const data = res.data;

      setIsOngoing(data);
      console.log("Ini respon ongoing anime:", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDataOnging();
  }, []);

  if (!isOngoing) {
    return <p>adada</p>;
  }
  return (
    <div className="w-full p-3">
      <div className="w-full">
        <div className="text-center">
          <h1 className="font-semibold text-xl">On Going Anime</h1>
          <p className="text-slate-500 text-xs">
            Here's collection of many anime ongoing.
          </p>
        </div>

        <div>
          {isOngoing.map((ongoing, i) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingPage;
