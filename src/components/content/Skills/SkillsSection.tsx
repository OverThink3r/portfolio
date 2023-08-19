import { FaAngleRight } from "react-icons/fa"
import {JavascriptOriginalIcon} from "react-devicons";
import {dataBaseTech, frameworks, languages, technologies, webTech} from "../../../data/skillsItems"
import {SkillsList} from "./SkillsList";
// import { SkillCard } from "./SkillCard"

const temp = () => {
  return <JavascriptOriginalIcon />
}
export const SkillsSection = () => {
  return (
    <section id="skills" className="container px-10 mx-auto text-white my-52 flex flex-col justify-center scroll-my-20">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Skills
      </h2>
      <SkillsList skills={languages} />
      <SkillsList skills={webTech} />
      <SkillsList skills={technologies} />
      <SkillsList skills={frameworks} />
      <SkillsList skills={dataBaseTech} />
    </section>
  )
}
