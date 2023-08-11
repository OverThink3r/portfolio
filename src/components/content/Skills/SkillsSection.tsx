import { FaAngleRight } from "react-icons/fa"
import { skillsItems } from "../../../data/skillsItems"
import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
  return (
    <section id="skills" className="container px-10 mx-auto text-white my-52 flex flex-col justify-center scroll-my-20">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Skills
      </h2>
      <div className="flex justify-center flex-wrap gap-4">
        {
          skillsItems.map(skill => (
            <SkillCard skill={skill} key={skill.title} />
          ))
        }
      </div>
    </section>
  )
}
