import { ProjectInterface } from "../interfaces";

export const projects: ProjectInterface[] = [
  {
    id: 1,
    projectTitle: "KiriPay",
    body: "Development of MVP for automatic collection management in the startup Kiritek to have control of the economic income reported by the company's customers. Creation and implementation of automatic routines (ETLs), database management, generation and sending of automatic invoices with cloud services.",
    projectPath: "projects-images/kiripay.PNG",
    borderColor: "border-purple-400",
    borderSide: "border-r-4",
    orientation: "IMG-L",
    skills: ['Vue', 'React', 'AWS', 'Git', 'Spring Boot', 'MySQL', 'PrimeFlex']
  },
  {
    id: 2,
    projectTitle: "Objetivos Educacionales",
    body: "Web and mobile application designed for the Instituto Tecnológico de Morelia to improve the follow-up process of residents in different companies, and in turn, with the results obtained, to implement improvements in the curricula according to the area of opportunity.",
    projectPath: "projects-images/objetivos.png",
    borderColor: "border-sky-400",
    borderSide: "border-l-4",
    repositoryUrl: "https://github.com/OverThink3r/ObjetivosEducacionales",
    orientation: "IMG-R",
    skills: ['Git', 'Laravel', 'Postgres', 'Flutter', 'Javascript']
  },
  {
    id: 3,
    projectTitle: "NumerAI",
    body: "Freelance development for a web application that allows students to test a mathematical model for image analysis as an interactive chat with an e-learning application.",
    projectPath: "projects-images/numerai.png",
    borderColor: "border-green-400",
    borderSide: "border-r-4",
    orientation: "IMG-L",
    repositoryUrl: "https://github.com/OverThink3r/numerai-front",
    projectUrl: "https://numer-ai.netlify.app/#/",
    skills: ['Git', 'Vue', 'Postgres']
  },
  {
    id: 4,
    projectTitle: "Doctor LandingPage",
    body: "Freelance development for a local doctor in order to attract more customers to publicize about the doctor, treatments and cures to their new patients and to publicize the contacts in order to establish the largest number of medical consultations.",
    projectPath: "projects-images/flores-landingpage.png",
    borderColor: "border-cyan-400",
    borderSide: "border-l-4",
    projectUrl: "https://drjoseflores.netlify.app/",
    repositoryUrl:  "https://github.com/vladimir-loza/dr-flores",
    orientation: "IMG-R",
    skills: ['Git', 'React', 'Tailwind']
  },
]