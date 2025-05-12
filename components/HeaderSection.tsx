"use client";
import React from "react";

const HeaderSection = () => {
  return (
    <header className="flex z-10 flex-col pb-9 w-full">
      <div className="flex gap-5 justify-between items-end self-center w-full max-w-[367px]">
        <button className="flex justify-center items-center p-2 mt-7 rounded-lg min-h-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01a2d176b613d6d892129d81432aa20eebe4b544?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain self-stretch my-auto w-6 aspect-square"
            alt="Menu"
          />
        </button>
        <div className="flex shrink-0 self-stretch h-[72px] w-[250px]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7a1abf2045a52a5926d0ecf647d3b580af6e668?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 mt-9 w-6 aspect-square"
          alt="Notification"
        />
      </div>
      <div className="flex overflow-hidden justify-center items-center px-4 text-sm text-white">
        <div className="flex flex-1 shrink gap-1 items-center self-stretch pr-4 pl-5 my-auto w-full rounded-full basis-0 bg-white bg-opacity-20 min-h-[42px] min-w-60">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d89dd019a98e3d831c3133460ad395cd365609?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            alt="Search"
          />
          <p className="overflow-hidden self-stretch my-auto">
            오늘도 NOL에서 즐겁게
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
