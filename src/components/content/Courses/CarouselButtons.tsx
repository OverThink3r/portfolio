import {  FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

interface Props {
  prevSlide: () => void,
  nextSlide: () => void,
}

export const CarouselButtons = ({prevSlide, nextSlide}: Props) => {
  return (
    <>
      <button className="p-1" onClick={prevSlide}>
        <FaChevronCircleLeft className="text-emerald-500/60 hover:text-emerald-500/100 text-lg md:text-3xl"/>
      </button>
      <button className="p-1" onClick={nextSlide}>
        <FaChevronCircleRight className="text-emerald-500/60 hover:text-emerald-500/100 text-lg md:text-3xl"/>
      </button>
    </>

  )
}
