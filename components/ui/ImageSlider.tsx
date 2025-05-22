"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  className?: string;
}

const ImageSlider = ({ images, className }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={twMerge("relative w-full", className)}>
      <div className="flex gap-2 w-full">
        <button
          onClick={goToPrevious}
          className="object-contain shrink-0 w-2 rounded-xl aspect-[0.06] z-10 bg-gray-200"
          aria-label="이전 이미지"
        />
        <div className="relative flex-1 overflow-hidden rounded-xl">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="object-cover w-full h-full"
          />
        </div>
        <button
          onClick={goToNext}
          className="object-contain shrink-0 w-2 rounded-xl aspect-[0.06] z-10 bg-gray-200"
          aria-label="다음 이미지"
        />
      </div>
      
      <div className="flex justify-center gap-1 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full ${
              index === currentIndex ? "bg-black w-3" : "bg-gray-300 w-1.5"
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 