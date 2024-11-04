const Episode = ({ episode }) => {
  return (
    <div className="w-full min-h-auto">
      <div className="w-full min-h-auto my-10">
        <div className="w-full px-5">
          <h1 className="font-bold text-xl">{episode.judul}</h1>
          
          <div>
            <iframe src={episode.iframe} width="100%" height="500" allowFullScreen></iframe>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Episode;
