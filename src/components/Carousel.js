import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, {useState} from "react";

export default function Carousel(images) {
  const slides = images.data;
  const [currentIndex, setCurrentIndex] = useState(0);
   
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="max-w-[475px] h-[300px] w-full m-auto relative group">
                
        <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        </div>
    
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronLeftIcon onClick={prevSlide} className="w-5" />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <ChevronRightIcon onClick={nextSlide} className="w-5" />
        </div>
    </div>
  )
}
