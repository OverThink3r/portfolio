import { AboutSection } from "./About"
import { HomeSection } from "./Home"
import { SkillsSection } from "./Skills"
import {ExperienceSection} from "./Experience/ExperienceSection";
import { ProjectsSection } from "./Projects";
import { CoursesSection } from "./Courses";

export const Content = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CoursesSection />
    </>
  )
}
