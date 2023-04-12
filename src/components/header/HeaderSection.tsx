import { FaAngleRight } from "react-icons/fa"
import { Navbar } from "./Navbar"

export const HeaderSection = () => {
  return (
    <div className="flex justify-between sticky top-0">
      <div className="w-40 m-3 text-white flex items-center">
        <FaAngleRight />
        Vladimir Loza
      </div>
      <Navbar />      
    </div>
  )
}
