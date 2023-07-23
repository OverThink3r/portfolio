import { FaAngleRight } from "react-icons/fa";

const experienceLabels = [
  'Kiritek',
  'Prestige English School',
  'Vinculación'
]

export const ExperienceSection = () => {
  return (
    <section id="experience" className="container px-10 mx-auto my-52 flex flex-col justify-center scroll-my-20 text-black">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Experience
      </h2>
      <div className="flex flex-col mx-auto w-3/5 min-w-fit items-center justify-center mb-20">

        <div className="timeline border-l-4 border-gray-200 ml-3 mt-3 py-16 space-y-14 w-full">
          <div className="relative">
            <div className="dot absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9]">
              <div className="dot absolute -top-1 -left-1 animate-ping bg-blue-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9] "></div>
            </div>
            <div className="pl-10">
              <span className="timeline-date text-xs font-bold opacity-60 tracking-widest">MAY 2023 - PRESENT</span>
              <a href="https://www.abaton.mx/" target="_blank" className="">
                <h3 className="timeline-title text-2xl sm:text-3xl text-gray-600 hover:underline hover:opacity-60 hover:text-sky-600 font-semibold tracking-wide mb-1">#Abaton Technologies</h3> 
              </a>
              <span className="italic text-emerald-600">Front End Developer</span>
              {/* <p className="text-gray-500 my-3">In abaton I have had the opportunity to work with clients at a corporate level and to contribute to develop innovative and strategic solutions that provide solutions to problems, applying monitoring technologies, reading large volumes of information and displaying them in a summarized and accurate way.</p> */}
              <ul className="list-disc list-inside text-gray-500">
                <li>Construction of complex searches in relational and non-relational databases.</li>
                <li>Elaboration of automatic ETL processes</li>
                <li>Migration of static web applications to front end frameworks.</li>
                <li>Development and implementation of web applications with responsive capabilities.</li>
                <li>Writing documentation of the different processes and implemented solutions.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline border-l-4 border-gray-200 ml-3 py-16 space-y-14 w-full">
          <div className="relative">
            <div className="dot absolute top-5 -left-3.5 bg-gray-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9]"></div>
            <div className="pl-10">
              <span className="timeline-date text-xs font-bold opacity-60 tracking-widest">AUG 2022 - MAR 2023</span>
              <a href="https://kiritek.com/" target="_blank" className="">
                <h3 className="timeline-title text-2xl sm:text-3xl text-gray-600 hover:underline hover:opacity-60 hover:text-sky-600 font-semibold tracking-wide mb-1">#Kiritek S.A de C.V</h3> 
              </a>
              <span className="italic text-emerald-600">Front End Developer</span>
              {/* <p className="text-gray-500 my-3">In this innovation and technology startup I had a great professional growth as a developer, I had the opportunity to work with productive projects, as well as contribute in the creation of a new MVP product and to be in contact with multiple development teams, obtaining several achievements:</p> */}
              <ul className="list-disc list-inside text-gray-500 mb-3">
                <li>Restructuring of massive load of leads.</li>
                <li>Reactivation of recruitment data update routines.</li>
                <li>Development and implementation of MVP for automatic collection of payments.</li>
                <li>Centralization of collection of all the company's products in the same repository.</li>
                <li>Drive digital transformation of processes.</li>
              </ul>
              <a className="italic text-gray-500 hover:text-sky-600" href="https://drive.google.com/file/d/1-lrresm6a6A0MLdDOGeA5DnmDtiZGLNS/view?usp=sharing" target="_blank">Testimonial</a>
            </div>
          </div>
        </div>
        <div className="timeline border-l-4 border-gray-200 ml-3 py-16 space-y-14 w-full">
          <div className="relative">
            <div className="dot absolute top-5 -left-3.5 bg-gray-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9]"></div>
            <div className="pl-10">
              <span className="timeline-date text-xs font-bold opacity-60 tracking-widest">FEB 2022 - DEC 2022</span>
              <a href="https://www.morelia.tecnm.mx/#/" target="_blank" className="">
                <h3 className="timeline-title text-2xl sm:text-3xl text-gray-600 hover:underline hover:opacity-60 hover:text-sky-600 font-semibold tracking-wide mb-1">#Instituto Tecnológico de Morelia</h3> 
              </a>
              <span className="italic text-emerald-600">Full Stack Developer</span>
              {/* <p className="text-gray-500 my-3">Development and implementation of web and mobile application designed to improve the process of tracking residents in different companies, to contribute in the CACEI certification of the company, performing several activities:</p> */}
              <ul className="list-disc list-inside text-gray-500">
                <li>Design and implementation of API Rest.</li>
                <li>Database administration.</li>
                <li>Design and layout user interfaces.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};