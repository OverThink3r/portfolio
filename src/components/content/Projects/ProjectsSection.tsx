import { FaAngleRight } from "react-icons/fa"
import { projects } from "../../../data/projectItems"
import { ProjectItem } from "./ProjectItem"

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container px-10 mx-auto text-black my-52 flex flex-col justify-center scroll-my-20">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Projects
      </h2>
      <div className="wrapper text-black">
       {
        projects.map(project => (
          <ProjectItem {...project} key={project.id}/>
        ))
       } 
      </div>
    </section>
  )
}
