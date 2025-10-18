import { useEffect, useState } from "react";
import api from "../service/api";
import type { schedulesType } from "../types/schedules";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const SchedulePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSchedule, setIsSchedule] = useState<schedulesType[]>([]);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const data = await api.getSchedule();

        setIsSchedule(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchSchedule();
  }, []);

  if (isError) return <p className="text-red-500">⚠️{isError}</p>;
  if (isLoading) return <Loading />;
  if (!isSchedule) return <p>Schedule no Found</p>;

  console.log("ini schedule:", isSchedule);

  return (
    <div className="w-full">
      <div className="w-full md:w-3/4 md:mx-auto lg:w-1/2 p-3 mt-10 text-center">
        <div className="w-full mb-5">
          <h1 className="font-bold text-2xl">Schedule Anime</h1>
          <p className="text-slate-500 text-xs">
            You can see your anime showtime in here.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {isSchedule.map((schedule, i) => (
            <div key={i} className="w-full    text-center">
              <div className="bg-orange-500 border border-slate-300">
                <h3 className="font-semibold text-white text-lg">
                  {schedule.hari}
                </h3>
              </div>
              <ul className="text-left text-slate-500  text-sm">
                {schedule.anime.map((anime, i) => (
                  <Link key={i} to={`/detail/${anime.slug}`}>
                    <li className="p-2 border bg-white hover:bg-slate-100 duration-200 transition-all ease-in-out border-slate-300">
                      {anime.judul}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
