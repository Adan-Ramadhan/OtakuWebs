import perbaikan from "../assets/perbaikan.png"

const Underconstruction = () => {
  return(
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
      <img  src={perbaikan} className="w-full lg:w-[500px] object-contain" />
      </div>
    </div>
  )
}

export default Underconstruction;