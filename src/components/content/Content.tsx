import { AboutSection } from "./About"
import { HeroSection } from "./Hero"
import { SkillsSection } from "./Skills"
import {ExperienceSection} from "./Experience/ExperienceSection";
import { ProjectsSection } from "./Projects";
import { CoursesSection } from "./Courses";
import {ContactForm} from "./Contact";

export const Content = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CoursesSection />
      {/* <ContactForm /> */}
    </>
  )
}
