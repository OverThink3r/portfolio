
interface Props {
  title: string,
  jobLink?: string
  time: string
}

export const JobHeader = ({ title, jobLink, time}: Props) => (
  <>
    <span className="timeline-date text-xs font-bold opacity-60 tracking-widest">{ time }</span>
    <a href={ jobLink || '' } target="_blank" className="">
      <h3 className="timeline-title text-2xl sm:text-3xl text-gray-600 hover:underline hover:opacity-60 hover:text-sky-600 font-semibold tracking-wide mb-1">#{ title }</h3> 
    </a>
  </>
)