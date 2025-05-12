"use client";
import React from "react";

const PerformanceExhibitions = () => {
  return (
    <section className="px-4 py-3.5 mt-8 text-lg font-bold leading-none bg-white min-h-[50px] text-zinc-900">
      <h2>HOT! 인기 공연/전시</h2>

      <div className="flex overflow-hidden gap-2 justify-center items-start pr-16 pl-4 text-sm leading-4 whitespace-nowrap min-h-9 text-neutral-500 mt-4">
        <button className="px-4 pt-2.5 pb-px font-bold text-white bg-black rounded-full min-h-9 w-[66px]">
          뮤지컬
        </button>
        <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[54px]">
          연극
        </button>
        <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[82px]">
          전시/행사
        </button>
        <button className="px-4 pt-2.5 pb-px rounded-full bg-slate-50 min-h-9 w-[77px]">
          페스티벌
        </button>
      </div>

      <div className="flex gap-3 mx-4 mt-4 text-sm leading-none text-zinc-900">
        <div className="flex-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02031c787d20e5e39fbdbaa16ba6c89e5b56867a?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain aspect-square w-[173px]"
            alt="Musical"
          />
          <p className="overflow-hidden mt-2.5">
            ［놀라운 특가］ 뮤지컬 &lt;알라
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc72f851c4425df6f963997ff783130e81e2b73?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain aspect-square w-[173px]"
            alt="Musical"
          />
          <p className="overflow-hidden mt-2.5">
            ［놀라운 특가］ 뮤지컬 &lt;도리
          </p>
        </div>
      </div>

      <div className="flex gap-3 mx-4 mt-1 text-xs leading-none text-neutral-500">
        <p className="overflow-hidden whitespace-nowrap">
          샤롯데씨어터
        </p>
        <p className="overflow-hidden">
          홍익대 대학로 아트센터 대극장
        </p>
      </div>

      <div className="flex gap-3 mx-4 mt-1 font-bold whitespace-nowrap">
        <p className="overflow-hidden self-stretch pr-36 text-sm leading-none min-h-5 text-neutral-500">
          품절
        </p>
        <div className="flex overflow-hidden items-center pr-24 min-h-5 text-zinc-900">
          <span className="self-stretch my-auto text-base leading-none">30,000</span>
          <span className="self-stretch my-auto text-sm leading-none">원~</span>
        </div>
      </div>

      <div className="flex gap-3 mx-4 mt-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e8c07d0b5aef80a6ecaf8894fa9c738b7f04a9d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 max-w-full aspect-square w-[173px]"
          alt="Musical"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e631946dd0700ae977875cca81e1ab3665bacf?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 max-w-full aspect-square w-[173px]"
          alt="Musical"
        />
      </div>

      <div className="flex gap-3 mx-4 mt-2.5 text-sm leading-none text-zinc-900">
        <p className="overflow-hidden">
          ［놀라운 특가］ 뮤지컬 &lt;라흐
        </p>
        <p className="overflow-hidden">
          ［놀라운 특가］ 뮤지컬 &lt;라이
        </p>
      </div>

      <div className="flex gap-3 mx-4 mt-1 text-xs leading-none text-neutral-500">
        <p className="overflow-hidden">예스24스테이지 1관</p>
        <p className="overflow-hidden">두산아트센터 연강홀</p>
      </div>

      <div className="flex gap-3 mx-4 mt-1 font-bold whitespace-nowrap text-zinc-900">
        <div className="flex overflow-hidden flex-1 items-center pr-24 min-h-5">
          <span className="self-stretch my-auto text-base leading-none">33,000</span>
          <span className="self-stretch my-auto text-sm leading-none">원~</span>
        </div>
        <div className="flex overflow-hidden flex-1 items-center pr-24 min-h-5">
          <span className="self-stretch my-auto text-base leading-none">30,000</span>
          <span className="self-stretch my-auto text-sm leading-none">원~</span>
        </div>
      </div>
    </section>
  );
};

export default PerformanceExhibitions;
