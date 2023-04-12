import { FaAngleRight } from "react-icons/fa"
import { skillsItems } from "../../../data/skillsItems"
import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
  return (
    <section id="skills" className="container mx-auto px-10 py-80 ">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Skills
      </h2>
      <div className="flex flex-wrap">
        {
          skillsItems.map(skill => (
            <SkillCard skill={skill} key={skill.title} />
          ))
        }
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
  )
}
