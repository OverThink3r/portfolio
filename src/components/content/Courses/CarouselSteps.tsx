
interface Props {
  imgSrcs: string[], 
  current: number, 
  setCourse: (idx: number) => void
}

export const CarouselSteps = ({imgSrcs, current, setCourse}: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {imgSrcs.map((img, idx) => (
        <div 
          key={img} 
          className={`transition-all w-3 h-3 bg-gray-500 rounded-full cursor-pointer ${current == idx ? 'p-2' : 'bg-opacity-50'}`}
          onClick={() => setCourse(idx)}
        >
        </div>
      ))}
    </div>
  )
}
