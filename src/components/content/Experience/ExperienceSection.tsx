import { FaAngleRight } from "react-icons/fa";

const experienceLabels = [
  'Kiritek',
  'Prestige English School',
  'Vinculación'
]

export const ExperienceSection = () => {
  return (
    <section id="experience" className="container px-10 mx-auto my-52 flex flex-col justify-center scroll-my-28 text-black">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Experience
      </h2>
      <div className="flex flex-col mx-auto w-3/5 min-w-fit items-center justify-center mb-20">

        <div className="timeline border-l-4 border-gray-200 ml-3 mt-3 py-16 space-y-14">
          <div className="relative">
            <div className="dot absolute top-5 -left-3.5 bg-blue-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9]">
              <div className="dot absolute -top-1 -left-1 animate-ping bg-blue-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9] "></div>
            </div>
            <div className="pl-10">
              <span className="timeline-date text-xs font-bold opacity-40 tracking-widest">MAY 2023 - PRESENT</span>
              <a href="https://www.abaton.mx/" target="_blank" className="">
                <h3 className="timeline-title text-3xl text-gray-600 hover:underline hover:opacity-60 font-semibold tracking-wide mb-2">Abaton Technologies</h3> 
              </a>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde aut consequuntur totam molestias atque ut repellat animi odit saepe!</p>
            </div>
          </div>
        </div>
        <div className="timeline border-l-4 border-gray-200 ml-3 py-16 space-y-14">
          <div className="relative">
            <div className="dot absolute top-5 -left-3.5 bg-gray-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9]"></div>
            <div className="pl-10">
              <span className="timeline-date text-xs font-bold opacity-40 tracking-widest">AUG 2022 - MAR 2023</span>
              <a href="https://kiritek.com/" target="_blank" className="">
                <h3 className="timeline-title text-3xl text-gray-600 hover:underline hover:opacity-60 font-semibold tracking-wide mb-2">Kiritek S.A de C.V</h3> 
              </a>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde aut consequuntur totam molestias atque ut repellat animi odit saepe!</p>
            </div>
          </div>
        </div>
        <div className="timeline border-l-4 border-gray-200 ml-3 py-16 space-y-14">
          <div className="relative">
            <div className="dot absolute top-5 -left-3.5 bg-gray-400 h-6 w-6 rounded-full border-4 border-[#FAF9F9]"></div>
            <div className="pl-10">
              <span className="timeline-date text-xs font-bold opacity-40 tracking-widest">FEB 2022 - DEC 2022</span>
              <a href="https://www.morelia.tecnm.mx/#/" target="_blank" className="">
                <h3 className="timeline-title text-3xl text-gray-600 hover:underline hover:opacity-60 font-semibold tracking-wide mb-2">Instituto Tecnológico de Morelia</h3> 
              </a>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde aut consequuntur totam molestias atque ut repellat animi odit saepe!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};