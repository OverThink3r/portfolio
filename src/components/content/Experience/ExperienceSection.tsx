import { FaAngleRight } from "react-icons/fa";
import { jobsData } from "../../../data/jobItems";
import { JobItem } from "./jobItem/JobItem";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="container px-10 mx-auto my-52 flex flex-col justify-center scroll-my-20 text-black">
      <h2 className="flex items-center text-2xl mb-5 text-sky-500">
        <FaAngleRight />
        Experience
      </h2>
      <div className="flex flex-col mx-auto w-3/5 min-w-fit items-center justify-center mb-20">
        {
          jobsData.map((job, idx)=> (
            <JobItem isPresent={idx === 0}>
              <JobItem.JobHeader  title={job.company} time={job.time} jobLink={job.link || ''}/>
              <JobItem.JobTitle jobTitle={job.jobTitle}/>
              <JobItem.JobGoals 
                goals={ job.goals.map(goal => <li>{goal}</li>) }
              />
            </JobItem>
          ))
        }
      </div>
    </section>
  );
};