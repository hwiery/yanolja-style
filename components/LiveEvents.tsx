"use client";
import React from "react";

const LiveEvents = () => {
  return (
    <section className="pl-4 w-full text-zinc-900">
      <div className="flex items-center px-4 pt-3.5 pb-4 text-lg font-bold leading-none bg-white min-h-[50px]">
        <h2 className="self-stretch my-auto">NOL 라이브 놀라운 혜택!</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2078995ed941eafa376199653a6c45b515da087?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square max-w-[358px]"
          alt="Arrow"
        />
      </div>

      <div className="flex gap-3">
        <div className="flex relative flex-col aspect-[0.667]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b16cde8943acbfe3141c6b26e314e59080f641?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-cover absolute inset-0 size-full"
            alt="Live event"
          />
          <div className="flex relative flex-col p-2 w-full">
            <span className="flex gap-0.5 justify-center items-center self-start px-2 py-1.5 text-xs font-bold leading-none text-center whitespace-nowrap bg-white rounded-md min-h-[26px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c708b80aec484aeee0408e863bbd5aa92af1cb28?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                alt="Live"
              />
              <span className="self-stretch my-auto">방송예정</span>
            </span>
            <h3 className="overflow-hidden mt-48 text-base font-bold leading-6 text-white">
              [소노 브랜드] 바다를 품은 소노&<br />
              쏠비치 지점 특가
            </h3>
            <div className="flex gap-1 justify-center items-center px-4 mt-4 whitespace-nowrap bg-white rounded-lg min-h-[60px]">
              <span className="self-stretch my-auto text-base font-bold leading-none">05.12(월)</span>
              <span className="self-stretch my-auto text-base leading-none">11:00</span>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8574cdb22f30520259a2bb99c8ae2be6d0bcc6e3?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 max-w-full rounded-xl aspect-[0.34] w-[122px]"
          alt="Live event banner"
        />
      </div>

      <button className="flex justify-center items-center px-4 pt-3 pb-3 mt-4 w-full text-sm font-bold leading-none text-center bg-white rounded-lg border border-gray-300 border-solid min-h-10">
        <span className="overflow-hidden self-stretch my-auto">
          NOL 라이브 놀라운 혜택! <span className="font-normal">전체보기</span>
        </span>
      </button>
    </section>
  );
};

export default LiveEvents;
