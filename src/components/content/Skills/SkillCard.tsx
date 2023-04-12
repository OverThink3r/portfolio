import { FaNodeJs } from "react-icons/fa"
import { SkillCardProps } from "../../../interfaces"



export const SkillCard = ({skill}: SkillCardProps) => {
  const {title, body, tags, Icon} = skill
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg bg-slate-700 mx-5 my-3">
      <div className="px-6 py-4">
        <div className="flex justify-between font-bold text-xl mb-2 text-slate-50">
          {title}
          {
            Icon && <Icon style={{fontSize: '1.5rem'}} />
          }
        </div>
        {
          body && <p className="text-slate-300 text-base"> {body} </p>
        }
      </div>
      <div className="px-6 pt-4 pb-2 ">
        {
          tags?.map( tag => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {`#${tag}`}
            </span>
          ))
        }
      </div>
    </div>
  )
}
