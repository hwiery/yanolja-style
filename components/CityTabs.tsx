"use client";
import React from "react";

const CityTabs = () => {
  return (
    <div className="flex overflow-hidden gap-2 justify-center items-start pr-28 pl-4 text-sm leading-4 whitespace-nowrap min-h-9 text-neutral-500">
      <button className="px-4 pt-2.5 pb-px font-bold text-white bg-black rounded-full min-h-9 w-[54px]">
        강원
      </button>
      <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[54px]">
        제주
      </button>
      <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[54px]">
        경상
      </button>
      <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[77px]">
        전라충청
      </button>
    </div>
  );
};

export default CityTabs;
