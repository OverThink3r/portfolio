import { SkillCardProps } from "../../../interfaces"

export const SkillCard = ({skill}: SkillCardProps) => {
  const {
    title,
    tags,
    Icon,
    backgroundTagColor,
    textTagColor,
    borderColor,
    iconColor,

  } = skill
  return (
    <div className={`w-64 rounded shadow-lg bg-white mx-5 my-3 border-b-4 ${borderColor}`}>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center font-bold text-xl mb-2 text-black ">
          {title}
          { Icon && <Icon style={{fontSize: '1.5rem'}} className={iconColor || ''}/> }
        </div>
      </div>
      <div className="px-6 flex flex-wrap justify-center">
        {
          tags?.map( tag => (
            <span
              key={tag}
              className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${backgroundTagColor} ${textTagColor}`}
            >
              {`${tag}`}
            </span>
          ))
        }
      </div>
    </div>
  )
}
