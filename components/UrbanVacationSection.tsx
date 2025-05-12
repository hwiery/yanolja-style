"use client";
import React, { useState } from "react";
import Card from "./ui/Card";
import TabButton from "./ui/TabButton";

interface LocationTabProps {
  locations: string[];
}

const LocationTabs: React.FC<LocationTabProps> = ({ locations }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex overflow-hidden gap-2 justify-center items-start pr-12 pl-4 text-sm leading-4 whitespace-nowrap min-h-9 text-neutral-500">
      {locations.map((location, index) => (
        <TabButton
          key={index}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
          width={index === 0 ? "82px" : index === 1 ? "82px" : index === 2 ? "81px" : "54px"}
        >
          {location}
        </TabButton>
      ))}
    </div>
  );
};

interface HotelCardProps {
  image: string;
  name: string;
  price: string;
  discount?: string;
}

const HotelPair: React.FC<{ hotels: HotelCardProps[] }> = ({ hotels }) => {
  return (
    <>
      <div className="flex gap-3 mx-4 mt-4">
        {hotels.map((hotel, index) => (
          <img
            key={index}
            src={hotel.image}
            className="object-contain shrink-0 max-w-full aspect-square w-[173px]"
            alt={hotel.name}
          />
        ))}
      </div>
      <div className="flex gap-3 mx-4 mt-2.5">
        {hotels.map((hotel, index) => (
          <div key={index} className="flex flex-col flex-1">
            <p className="overflow-hidden text-sm leading-none text-zinc-900">
              {hotel.name}
            </p>
            <div className="flex gap-2 self-start mt-1.5 whitespace-nowrap">
              {hotel.discount && (
                <span className="grow text-base leading-none text-pink-600">{hotel.discount}</span>
              )}
              <div className="flex gap-0.5 font-bold text-zinc-900">
                <span className="grow text-base leading-none">{hotel.price}</span>
                <span className="text-sm leading-none">원~</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const UrbanVacationSection: React.FC = () => {
  const locations = ["서울/강북", "서울/강남", "경기·인천", "부산"];
  
  const hotelGroups = [
    [
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/34637b5a29d4e74df4eff99d03f6e2be26a068eb?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        name: "호텔 더 디자이너스 홍대",
        price: "211,800",
        discount: "3%"
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f4c21b02db8449958a76cc7daafd0ef6b4d710?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        name: "신라스테이 마포",
        price: "191,000",
        discount: "4%"
      }
    ],
    [
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf3192081df6d1b4e624f54f012b4e308502249a?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        name: "오라카이 대학로 호텔, BW 시그",
        price: "188,800",
        discount: "5%"
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/95b9e70e82bd3e9fa3dd635c02300435a5e8ac4d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        name: "신라스테이 광화문",
        price: "226,400",
        discount: "4%"
      }
    ]
  ];

  return (
    <section>
      <h2 className="px-4 py-3.5 mt-8 text-lg font-bold leading-none bg-white min-h-[50px] text-zinc-900">
        지금 떠나는 도심 호캉스!
      </h2>

      <LocationTabs locations={locations} />

      {hotelGroups.map((hotels, index) => (
        <HotelPair key={index} hotels={hotels} />
      ))}
    </section>
  );
};

export default UrbanVacationSection; 