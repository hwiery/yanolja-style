"use client";
import React from "react";

interface LeisureItemProps {
  rank: string;
  name: string;
  discount?: string;
  price: string;
  imageSrc: string;
}

const LeisureItem = ({
  rank,
  name,
  discount,
  price,
  imageSrc
}: LeisureItemProps) => {
  return (
    <article className="flex gap-3 items-start mt-3 w-full">
      <div className="overflow-hidden w-7 max-w-[358px]">
        <div className="flex overflow-hidden flex-col justify-center items-center w-7 min-h-[50px]">
          <img
            src={rank}
            className="object-contain w-full aspect-[0.56]"
            alt={`Rank ${rank}`}
          />
        </div>
      </div>
      <div className="overflow-hidden flex-1 shrink pt-2.5 basis-0 text-zinc-900">
        <h3 className="overflow-hidden w-full text-sm leading-none">
          {name}
        </h3>
        <div className="flex overflow-hidden items-center mt-1.5 w-full font-bold whitespace-nowrap min-h-5">
          {discount ? (
            <div className="flex gap-1.5 self-start text-base font-bold leading-none">
              <span className="text-pink-600">{discount}</span>
              <span>{price}</span>
              <span className="text-sm leading-none">원~</span>
            </div>
          ) : (
            <>
              <span className="self-stretch my-auto text-base leading-none">{price}</span>
              <span className="self-stretch my-auto text-sm leading-none">원~</span>
            </>
          )}
        </div>
      </div>
      <img
        src={imageSrc}
        className="object-contain shrink-0 rounded-lg aspect-square w-[90px]"
        alt={name}
      />
    </article>
  );
};

const LeisureTickets = () => {
  return (
    <section className="px-4 py-3.5 mt-8 bg-white min-h-[68px] text-zinc-900">
      <h2 className="text-lg font-bold leading-none">많이 찾는 즐길거리</h2>
      <p className="text-sm leading-none">최근 한 달간 구매 많은 순</p>

      <div className="flex overflow-hidden flex-col justify-center px-4 w-full">
        <LeisureItem
          rank="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1a3ff572eb3d203448a56b593a883684a3726e?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          name="화담숲 입장권 (03.12~05.11)"
          price="11,000"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d35780f8ef5b12586df766e78ca2fc4e9d959cd0?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        />

        <LeisureItem
          rank="https://cdn.builder.io/api/v1/image/assets/TEMP/8e6664a3b743979950ca46b2d64c37fe94ac81ff?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          name="화담숲 입장권 (05.13~)"
          price="11,000"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d35780f8ef5b12586df766e78ca2fc4e9d959cd0?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        />

        <LeisureItem
          rank="https://cdn.builder.io/api/v1/image/assets/TEMP/4329f2c916bde06bcb9bcbc7a1a68a75acf23e7a?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          name="한국민속촌 공포체험 살귀옥/혈안식귀/"
          price="8,000"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/296537423cb52fa49039d406418af57449406038?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        />

        <LeisureItem
          rank="https://cdn.builder.io/api/v1/image/assets/TEMP/1ec18370df235ebfda439fce8a1cf2da3e5cb46c?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          name="에버랜드 오후이용권"
          discount="44%"
          price="29,000"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/95f9d399d4872ac90a48e2d4a57fc20b7ff3b142?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        />

        <LeisureItem
          rank="https://cdn.builder.io/api/v1/image/assets/TEMP/27905218511243017805df3380e29a01247292e0?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          name="아르떼뮤지엄 입장권"
          price="14,000"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/94e2911ffa33040ae163d13d8ec75393784579a4?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        />
      </div>

      <button className="flex justify-center px-4 py-3 mx-4 mt-4 w-full text-sm leading-none text-center whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid max-w-[358px] min-h-10 text-zinc-900">
        <span className="overflow-hidden min-w-12">전체보기</span>
      </button>
    </section>
  );
};

export default LeisureTickets;
