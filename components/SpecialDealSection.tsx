"use client";
import React, { useState } from "react";

const SpecialDealSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 5;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <section>
      <h2 className="overflow-hidden z-10 self-center mt-16 text-lg font-bold leading-none text-center text-white">
        놀라운 특가
      </h2>

      <div className="flex relative flex-col justify-center mt-0 w-full aspect-[0.717] min-h-[544px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3502a783e0c6baeefd2eb5c557a4c78448ba32?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <div className="flex relative flex-1 gap-3 items-start pt-24 pb-16 bg-black bg-opacity-60 size-full">
          <button 
            onClick={goToPrevious}
            className="object-contain shrink-0 aspect-[0.14] w-[55px] z-10"
            aria-label="이전 특가"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a22e5bb92747e0647a2405fbacf763744b8a8bac?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
              className="w-full h-full"
              alt="Left arrow"
            />
          </button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/191ceda8c8a62849aedd659d5a3bec896cb84cdb?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain w-full aspect-[0.67]"
            alt="Special deal"
          />
          <button 
            onClick={goToNext}
            className="object-contain shrink-0 aspect-[0.14] w-[55px] z-10"
            aria-label="다음 특가"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34568df8137f9a9f92ebb37e5b393ef4072a10e?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
              className="w-full h-full"
              alt="Right arrow"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <span className="z-10 text-xs font-bold leading-none text-white">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="z-10 ml-2.5 text-xs leading-none text-white">
          / {String(totalItems).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default SpecialDealSection; 