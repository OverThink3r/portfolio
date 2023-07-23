import {  FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

interface Props {
  prevSlide: () => void,
  nextSlide: () => void,
}

export const CarouselButtons = ({prevSlide, nextSlide}: Props) => {
  return (
    <>
      <button className="p-1" onClick={prevSlide}>
        <FaChevronCircleLeft fontSize="1.5rem" className="text-black"/> 
      </button>
      <button className="p-1" onClick={nextSlide}>
        <FaChevronCircleRight fontSize="1.5rem" className="text-black"/> 
      </button>
    </>

  )
}
