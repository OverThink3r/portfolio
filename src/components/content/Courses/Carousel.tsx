import { useEffect, useState } from "react"
import { imgSrcs } from "../../../data/imgSources"
import { CarouselSteps } from "./CarouselSteps"
import { CarouselButtons } from "./CarouselButtons"


export const Carousel = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => setCurrent(prev => prev === 0 ? imgSrcs.length - 1 : prev - 1)

  const nextSlide = () => setCurrent(prev => prev === imgSrcs.length - 1 ? 0 : prev + 1)

  const setCourse = (idx: number) => setCurrent(idx)

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
        {
          imgSrcs.map(image => (
            <img src={image} alt="" key={image}/>
          ))
        }
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-1">
        <CarouselButtons nextSlide={nextSlide} prevSlide={prevSlide}/>
      </div>

      <div className="absolute bottom-4 right-0 left-0 -mb-4">
        <CarouselSteps current={current} imgSrcs={imgSrcs} setCourse={setCourse}/>
      </div>
    </div>
  )
}
