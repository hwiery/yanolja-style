"use client";
import React from "react";

const HotelCategoryTabs = () => {
  return (
    <div className="px-4 py-3.5 mt-8 bg-white min-h-[68px] text-zinc-900">
      <h2 className="text-lg font-bold leading-none">관심 지역의 많이 찾는 숙소</h2>
      <p className="text-sm leading-none">최근 한 주간 구매 많은 순</p>

      <div className="flex overflow-hidden gap-2 justify-center items-start pr-20 pl-4 text-sm leading-4 whitespace-nowrap min-h-9 text-neutral-500 mt-4">
        <button className="px-4 pt-2.5 pb-px font-bold text-white bg-black rounded-full min-h-9 w-[54px]">
          호텔
        </button>
        <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[54px]">
          펜션
        </button>
        <button className="px-4 pt-2.5 pb-0.5 rounded-full bg-slate-50 min-h-9 w-[54px]">
          모텔
        </button>
        <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[99px]">
          게스트하우스
        </button>
      </div>
    </div>
  );
};

export default HotelCategoryTabs;
