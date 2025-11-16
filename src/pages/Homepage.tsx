import { Link } from "react-router-dom";

type featuresType = {
  title: string;
  content: string;
  icon: string;
};

const features: featuresType[] = [
  {
    title: "Free",
    content: "Feel free to watch your favorite anime.",
    icon: "",
  },
  {
    title: "New Episode Every Day",
    content: "Always up to date, we always update everyday for your.",
    icon: "",
  },
  {
    title: "Responsive Design",
    content: "Watch in every device like mobile, tv, pc or anything you have.",
    icon: "",
  },
];

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full md:w-3/4 lg:w-1/2 md:mx-auto p-3 ">
        <div className="w-full h-[300px] flex flex-col items-center justify-center my-10 text-center ">
          <h1 className="font-bold md:text-3xl text-2xl mb-2">
            Stream's Your's Favorite Anime Here.
          </h1>
          <p className="text-slate-500 text-sm mb-5">
            This alternative website to streaming anime, you can enjoy your fav
            anime in here
          </p>

          <Link
            to={`/search`}
            className="rounded-full transition-all duration-300 ease-in-out px-4 font-semibold text-lg py-1 bg-white hover:bg-orange-500 hover:text-white border-orange-500 border-2"
          >
            Explore
          </Link>
        </div>

        <div className="w-full text-center">
          <h3 className="text-xl font-semibold mb-3">Our Fitures</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {features.map((feature, i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-2">
                <p className="font-semibold text-sm">{feature.title}</p>
                <p className="text-slate-500 text-xs">{feature.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
