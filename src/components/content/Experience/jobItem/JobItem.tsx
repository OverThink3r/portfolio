import { ReactNode } from "react"
import { JobHeader } from "./JobHeader"
import { JobTitle } from './JobTitle';
import { JobGoals } from "./JobGoals";

interface Props {
  children: ReactNode,
  isPresent?: Boolean
}


const JobItem = ({ children, isPresent = false }:Props) => {
  return (
    <div className={`timeline border-l-4 border-gray-200 ml-3 py-16 space-y-14 w-full ${isPresent ? 'mt-3' : ''}`}>
      <div className="relative">
        <div className={`dot absolute top-5 -left-3.5 h-6 w-6 rounded-full border-4 border-[#FAF9F9] ${isPresent ? 'bg-blue-400' : 'bg-gray-400 '}`}>
          <div className={`dot absolute -top-1 -left-1 h-6 w-6 rounded-full border-4 border-[#FAF9F9] ${isPresent ? 'animate-ping bg-blue-400' : 'bg-gray-400'}`}></div>
        </div>
        <div className="pl-10">
          {children}
        </div>
      </div>
    </div>
  )
}

JobItem.JobHeader = JobHeader;
JobItem.JobTitle = JobTitle;
JobItem.JobGoals = JobGoals;

export {
  JobItem
}
