import Loading from "../Loading"

const Episode = ({ episode}) => {
  
  if(!episode.mirror){
    return <Loading/>
  }
  
  return (
    <div className="w-full min-h-auto">
      <div className="w-full xl:w-3/4 mx-auto min-h-auto px-5 my-10">
        <div className="w-full ">
          <h1 className="font-bold text-xl">{episode.judul}</h1>
          
          <div className="w-full h-[200px] mt-3 sm:h-[400px] lg:h-[550px] overflow-hidden rounded">
            <iframe src={episode.iframe} width="100%" height="100%" allowFullScreen></iframe>
          </div>
        </div>

        {/* <div className="w-full mt-5">
          <select className="bg-purple-700 px-5 py-1 text-white rounded-md">
            {episode.mirror.m360p.map((item, index) => {
              return(
                <option key={index} >{item.nama}</option>
                )
            })}
            <option>da432</option>
          </select>
        </div> */}

      </div>
    </div>
  );
};

export default Episode;
