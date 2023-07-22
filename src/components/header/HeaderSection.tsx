import { FaAngleRight } from "react-icons/fa"
import { Navbar } from "./Navbar"

export const HeaderSection = () => {
  return (
    <div className="flex justify-around sticky top-0 px-2 shadow-md bg-white z-10">
      <div className="w-40 m-3 text-black flex items-center">
        <FaAngleRight />
        Vladimir Loza
      </div>
      <Navbar />      
    </div>
  )
}
