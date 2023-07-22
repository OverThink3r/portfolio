import { ProjectInterface } from "../../../interfaces"


export const ProjectItem = (props: ProjectInterface) => {
  const {
    projectTitle,
    body,
    projectPath,
    borderColor,
    borderSide,
    projectUrl,
    repositoryUrl,
    orientation,
    skills,
    id,
  } = props

  const imgSide = () => {
   return (
      <div className="w-full lg:w-1/2 h-96">
        <img 
          src={projectPath}
          alt=""
          className="w-full h-full object-cover" 
        />
    </div>
    )
  }

  const bodySide = () => {
    return (
      <div className="relative w-full lg:w-1/2 flex flex-col gap-5 justify-center bg-white p-5 items-center">
        <h3 className="w-full font-bold text-3xl">{projectTitle}</h3>
        <div>
          <p className="">
            {body}
          </p>
        </div>
        <span className="absolute bottom-0 right-0 mb-5">
          { repositoryUrl && <a href={repositoryUrl} target="_blank" className="text-light mx-4 cursor-pointer hover:text-sky-500 hover:underline text-black/60">Code</a> }
          { projectUrl && <a href={projectUrl} target="_blank" className="text-light mx-4 cursor-pointer hover:text-emerald-300 hover:underline  text-black/60">Project</a> }
        </span>
        <div className="flex m-2">
          {
            skills?.map(skill => (
              <span
                key={`${id}_${skill}`}
                className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700/70 mr-2 mb-2`}
              >
                {skill}
              </span>
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <div className={`item-project flex flex-col lg:flex-row ${borderSide} ${borderColor}`}>
     {
      (orientation === 'IMG-L') 
      ? (
        <>
          {imgSide()}
          {bodySide()}
        </>
      )
      : (
        <>
          {bodySide()}
          {imgSide()}
        </>
      )
     } 
      
    </div>
  )
}
