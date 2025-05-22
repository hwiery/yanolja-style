"use client";
import React, { useState } from "react";
import TabButton from "./ui/TabButton";

interface PerformanceTabsProps {
  tabs: string[];
}

const PerformanceTabs: React.FC<PerformanceTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="flex overflow-hidden gap-2 justify-center items-start pr-16 pl-4 text-sm leading-4 whitespace-nowrap min-h-9 text-neutral-500">
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
          width={index === 0 ? "66px" : index === 1 ? "54px" : index === 2 ? "82px" : "77px"}
        >
          {tab}
        </TabButton>
      ))}
    </div>
  );
};

interface PerformanceProps {
  image: string;
  title: string;
  location: string;
  price?: string;
  isSoldOut?: boolean;
}

const PerformancePair: React.FC<{ performances: PerformanceProps[] }> = ({ performances }) => {
  return (
    <>
      <div className="flex gap-3 mx-4 mt-4 text-sm leading-none text-zinc-900">
        {performances.map((performance, index) => (
          <div key={index} className="flex-1">
            <img
              src={performance.image}
              className="object-contain aspect-square w-[173px]"
              alt={performance.title}
            />
            <p className="overflow-hidden mt-2.5">
              {performance.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mx-4 mt-1 text-xs leading-none text-neutral-500">
        {performances.map((performance, index) => (
          <p key={index} className="overflow-hidden whitespace-nowrap">
            {performance.location}
          </p>
        ))}
      </div>
      <div className="flex gap-3 mx-4 mt-1 font-bold whitespace-nowrap">
        {performances.map((performance, index) => (
          performance.isSoldOut ? (
            <p key={index} className="overflow-hidden self-stretch pr-36 text-sm leading-none min-h-5 text-neutral-500">
              품절
            </p>
          ) : (
            <div key={index} className="flex overflow-hidden items-center pr-24 min-h-5 text-zinc-900">
              <span className="self-stretch my-auto text-base leading-none">{performance.price}</span>
              <span className="self-stretch my-auto text-sm leading-none">원~</span>
            </div>
          )
        ))}
      </div>
    </>
  );
};

const HotPerformanceSection: React.FC = () => {
  const tabs = ["뮤지컬", "연극", "전시/행사", "페스티벌"];
  
  const performanceGroups = [
    [
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/02031c787d20e5e39fbdbaa16ba6c89e5b56867a?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        title: "［놀라운 특가］ 뮤지컬 <알라",
        location: "샤롯데씨어터",
        isSoldOut: true
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfc72f851c4425df6f963997ff783130e81e2b73?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        title: "［놀라운 특가］ 뮤지컬 <도리",
        location: "홍익대 대학로 아트센터 대극장",
        price: "30,000"
      }
    ],
    [
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e8c07d0b5aef80a6ecaf8894fa9c738b7f04a9d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        title: "［놀라운 특가］ 뮤지컬 <라흐",
        location: "예스24스테이지 1관",
        price: "33,000"
      },
      {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9e631946dd0700ae977875cca81e1ab3665bacf?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
        title: "［놀라운 특가］ 뮤지컬 <라이",
        location: "두산아트센터 연강홀",
        price: "30,000"
      }
    ]
  ];

  return (
    <section>
      <h2 className="px-4 py-3.5 mt-8 text-lg font-bold leading-none bg-white min-h-[50px] text-zinc-900">
        HOT! 인기 공연/전시
      </h2>

      <PerformanceTabs tabs={tabs} />

      {performanceGroups.map((performances, index) => (
        <PerformancePair key={index} performances={performances} />
      ))}
    </section>
  );
};

export default HotPerformanceSection; 