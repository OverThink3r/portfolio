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

  const projectButton = () => (
    <button
      type="button"
      className="w-20 border-2 border-emerald-500 bg-transparent text-emerald-500 hover:bg-emerald-400 hover:text-white p-1 rounded-md mx-3 min-w-fit"
    >
      Code
    </button>
  )

  const codeButton = () => (
    <button
      className="w-20 border-2 border-sky-500 bg-transparent hover:bg-sky-500 hover:text-white p-1 rounded-md text-sky-500 mx-3 min-w-fit"
      type="button"
    >
      Project
    </button>
  )


  const imgSide = () => {
   return (
      <div className="w-full lg:w-1/2 h-full md:h-96">
        <img 
          src={projectPath}
          alt=""
          className="w-full h-full object-contain md:object-cover " 
        />
    </div>
    )
  }

  const bodySide = () => {
    return (
      <div className="relative w-full lg:w-1/2 flex flex-col gap-3 justify-center bg-white p-5 items-center">
        <h3 className="w-full font-bold text-2xl md:text-3xl">{projectTitle}</h3>
        <div>
          <p className="text-sm md:text-md">
            {body}
          </p>
        </div>
        <div className="flex mb-10 md:my-5 flex-wrap justify-center ">
          {
            skills?.map(skill => (
              <span
                key={`${id}_${skill}`}
                className="inline-block bg-slate-50 border border-black-[0.1] rounded-md px-3 py-1 text-xs md:text-sm font-semibold text-gray-700/70 mr-2 mb-2"
              >
                {skill}
              </span>
            ))
          }
        </div>
        <div className="absolute bottom-0 right-0 mb-5">
          { repositoryUrl && <a href={repositoryUrl} target="_blank"> {projectButton()} </a> }
          { projectUrl && <a href={projectUrl} target="_blank">{codeButton()}</a> }
        </div>
      </div>
    )
  }

  return (
    <div className={`item-project flex flex-col lg:flex-row my-5 lg:my-0 shadow-xl lg:shadow-none ${borderSide} ${borderColor}`}>
     {
      (orientation === 'IMG-L') 
      ? (<> {imgSide()} {bodySide()} </>)
      : (<> {bodySide()} {imgSide()} </>)
     } 
    </div>
  )
}
