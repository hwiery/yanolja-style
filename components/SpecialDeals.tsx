"use client";
import * as React from "react";

const SpecialDeals: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col mx-4 mt-8 w-full aspect-[0.751] max-w-[358px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f60311b3b92d5a09068ae01e284fb092e48e0d5a?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        className="object-cover absolute inset-0 size-full"
        alt="Special deals background"
      />
      <div className="flex relative flex-col px-4 pt-8 pb-5 w-full rounded-xl">
        <h2 className="overflow-hidden self-start text-xl font-bold leading-tight text-white">
          해외 자유여행 초특가
        </h2>
        <button className="flex gap-0.5 justify-center self-start px-2 py-2.5 mt-4 text-xs font-bold leading-none text-center whitespace-nowrap bg-white rounded-full min-h-8 min-w-16 text-zinc-900">
          <span className="overflow-hidden pl-1.5 min-w-[58px]">자세히보기</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc1e9d04b0148709350f93397d172a399f75c13?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
            alt="Arrow"
          />
        </button>

        <div className="flex gap-2 mt-44">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b188b592c06383ed1e2922c465c780c8fca5433?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain shrink-0 max-w-full rounded-lg aspect-[0.75] w-[103px]"
            alt="Vietnam Danang"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b28f3c4fc70c8fff5c1f424a83fc0a6fe887fcd?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain shrink-0 max-w-full rounded-lg aspect-[0.76] w-[104px]"
            alt="Vietnam Nha Trang"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5741cca371bb82efe484046748db0fef04e8bc?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain shrink-0 max-w-full rounded-lg aspect-[0.75] w-[103px]"
            alt="Vietnam Phu Quoc"
          />
        </div>

        <div className="flex gap-2 mt-2.5 text-sm leading-none text-zinc-900">
          <p className="overflow-hidden">[베트남/다낭] 신라</p>
          <p className="overflow-hidden">[베트남/나트랑] ★</p>
          <p className="overflow-hidden">[베트남/푸꾸옥] ★</p>
        </div>

        <div className="flex gap-2 mt-1 w-full font-bold whitespace-nowrap text-zinc-900">
          <div className="flex overflow-hidden flex-1 items-center pr-8 min-h-4">
            <span className="self-stretch my-auto text-sm leading-none">269,000</span>
            <span className="self-stretch my-auto text-xs leading-none">원~</span>
          </div>
          <div className="flex overflow-hidden flex-1 items-center pr-8 min-h-4">
            <span className="self-stretch my-auto text-sm leading-none">399,000</span>
            <span className="self-stretch my-auto text-xs leading-none">원~</span>
          </div>
          <div className="flex overflow-hidden flex-1 items-center pr-9 min-h-4">
            <span className="self-stretch my-auto text-sm leading-none">419,000</span>
            <span className="self-stretch my-auto text-xs leading-none">원~</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-between self-center mt-4 max-w-full w-[272px]">
        <button className="flex justify-center items-center py-1.5 pr-10 pl-10 bg-white rounded-lg border border-gray-300 border-solid min-h-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d113b142574f08d711c38559f5427bc9440cc30f?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain self-stretch my-auto w-5 aspect-square"
            alt="Previous"
          />
        </button>
        <div className="flex gap-1.5 my-auto text-sm leading-none text-center whitespace-nowrap text-zinc-900">
          <span className="font-bold">1</span>
          <span className="text-xs leading-none">/</span>
          <span>6</span>
        </div>
        <button className="flex justify-center items-center py-1.5 pr-10 pl-10 bg-white rounded-lg border border-gray-300 border-solid min-h-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e25da084e1fc48c50e838af1616197349b13d4df?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain self-stretch my-auto w-5 aspect-square"
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
};

export default SpecialDeals;
