import neko from "../assets/neko.png"

const NotFound = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
      <img src={neko} className="w-full lg:w-[500px] object-contain"  />
      </div>
    </div>
  )
} 

export default NotFound;