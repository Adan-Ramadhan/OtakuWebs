import { Link } from "react-router-dom"

const DownloadAnime = ({watchAnime}) => {


  if(!watchAnime){
    return <div>Loading...</div>
  }


console.log(watchAnime.mp4)
  return(
    <>
      {watchAnime ? (
        <div className="w-full min-h-auto">
          <div>
            <div>
              <h1>Download URL's .mp4</h1>
                {watchAnime.mp4.map((mp4, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <h1>{mp4.resolution}: </h1>
                        <div>
                          {/* {urls.map((url, index) => {
                            return(
                            <div key={index}>
                              <Link to={url.url} >{url.provider}</Link>
                            </div>  
                            )
                          })} */}
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      ) : ""}
    </>
  )
}

export default DownloadAnime;