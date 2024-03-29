import { FaAngleRight } from "react-icons/fa"
import { Carousel } from "./Carousel"

export const CoursesSection = () => {

  return (
    <section id="courses" className="container px-2 mx-auto text-white my-18 flex flex-col justify-center scroll-my-20">
      <h2 className="text-2xl mb-5 flex flex-row items-center text-sky-500 pl-5">
        <FaAngleRight />
        Courses
      </h2>
      <div className="w-full sm:w-4/5 lg:w-3/5 mx-auto">
        <Carousel />
      </div>
    </section>
  )
}
