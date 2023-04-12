import { FaAngleRight } from "react-icons/fa"
import { AboutDescription } from "./AboutDescription"
import { HobbiesGoalsGrid } from "./HobbiesGoalsGrid"

export const AboutSection = () => {
  
  return (
    <section id="about" className="container px-10  mx-auto text-white ">
      <h2 className="text-2xl mb-5 flex flex-row items-center text-sky-500">
        <FaAngleRight />
        About me
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/4 mx-3">
          <AboutDescription />
          <HobbiesGoalsGrid />
        </div>
        <div className="w-full md:w-2/4 mx-3">
          <img 
            src="profile-picture.jpg" 
            alt="User profile" 
            className="w-80 h-auto mx-auto rounded-md drop-shadow-2xl my-3"
          />
        </div>
      </div>
    </section>
  )
}
