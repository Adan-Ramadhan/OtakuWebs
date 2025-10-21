import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full  p-3 flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-4xl font-bold mb-5">Welcom to my web anime stream</h1>
        <Link to={"/search"} className="border-2 hover:text-white transition-all ease-in-out duration-300 text-sm md:text-lg border-orange-500 font-bold hover:bg-orange-500 bg-white rounded-full px-4 py-1">Explore</Link>
        <div className="w-full text-center mt-40">
          <h1 className="text-xl text-slate-500 font-bold">On Developing</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
