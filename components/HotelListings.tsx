"use client";
import React from "react";

interface HotelItemProps {
  rank: string;
  name: string;
  discount?: string;
  price: string;
  rating: string;
  reviews: string;
  imageSrc: string;
}

const HotelItem = ({
  rank,
  name,
  discount,
  price,
  rating,
  reviews,
  imageSrc
}: HotelItemProps) => {
  return (
    <article className="flex gap-3 items-start mx-4 mt-3">
      <div className="overflow-hidden w-7 max-w-[358px]">
        <div className="flex overflow-hidden flex-col justify-center items-center w-7 min-h-[50px]">
          <img
            src={rank}
            className="object-contain w-full aspect-[0.56]"
            alt={`Rank ${rank}`}
          />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink items-start pt-2.5 text-sm basis-0 text-zinc-900">
        <h3 className="overflow-hidden self-stretch leading-none">
          {name}
        </h3>
        <div className="flex gap-1.5 mt-2 text-base font-bold leading-none whitespace-nowrap">
          {discount && <span className="grow text-pink-600">{discount}</span>}
          <span>{price}</span>
          <span className="text-sm leading-none">원~</span>
        </div>
        <div className="flex gap-1.5 mt-2 whitespace-nowrap">
          <div className="flex gap-0.5 font-bold leading-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad7416e866aa3ba74525d222f3fd31f7af4335e0?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
              className="object-contain shrink-0 self-start w-4 aspect-square"
              alt="Star"
            />
            <span>{rating}</span>
          </div>
          <span className="leading-none">{reviews}</span>
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

const HotelListings = () => {
  return (
    <section>
      <HotelItem
        rank="https://cdn.builder.io/api/v1/image/assets/TEMP/73ee7e8e6c789de5173ca81daf3f0c9fc7bab429?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        name="체스터톤스 속초"
        discount="5%"
        price="122,000"
        rating="4.6"
        reviews="(2,441)"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/93292ccae7e2cef9e8452455bec6c3c0060324bd?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
      />

      <HotelItem
        rank="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e393d29a26b33dfe6c549247a266512871238?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        name="체스터톤스 낙산"
        discount="4%"
        price="104,000"
        rating="4.5"
        reviews="(412)"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/92dad173ee6d4b8a5d39195940b89141906307be?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
      />

      <HotelItem
        rank="https://cdn.builder.io/api/v1/image/assets/TEMP/eded4e32e37c229a57e3b654094a625bf16b8812?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        name="스카이베이 호텔 경포"
        price="250,470"
        rating="4.6"
        reviews="(6,694)"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a2a02c02c7e26b01bb7cb7ed56da349070c5999d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
      />

      <HotelItem
        rank="https://cdn.builder.io/api/v1/image/assets/TEMP/0d03aa8534354fe6e14040456085dbcf148abd5f?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        name="신라스테이 구로"
        discount="4%"
        price="197,800"
        rating="4.7"
        reviews="(8,540)"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/184d1ab2986065dacd66067eeae3668162507ba4?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
      />

      <HotelItem
        rank="https://cdn.builder.io/api/v1/image/assets/TEMP/024372bd1acf0d31ce06ffe9a9b8a32e38a91b73?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
        name="신라스테이 동탄"
        discount="13%"
        price="142,800"
        rating="4.7"
        reviews="(4,185)"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/553676883240a14427d37715759142f42e01b2ae?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
      />

      <button className="flex justify-center items-center px-4 pt-3 pb-3 mx-4 mt-4 w-full text-sm font-bold leading-none text-center bg-white rounded-lg border border-gray-300 border-solid max-w-[358px] min-h-10 text-zinc-900">
        <span className="overflow-hidden self-stretch my-auto">
          호텔 <span className="font-normal">전체보기</span>
        </span>
      </button>
    </section>
  );
};

export default HotelListings;
