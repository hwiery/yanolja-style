"use client";
import React, { useState } from "react";
import TabButton from "./ui/TabButton";
import Card from "./ui/Card";

interface LeisureTabsProps {
  tabs: string[];
}

const LeisureTabs: React.FC<LeisureTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="flex gap-2">
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          isActive={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </TabButton>
      ))}
    </div>
  );
};

interface LeisureItemProps {
  image: string;
  title: string;
  price: string;
  discount?: string;
}

const LeisureGrid: React.FC<{ items: LeisureItemProps[] }> = ({ items }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col">
          <img
            src={item.image}
            className="object-contain aspect-square w-[173px]"
            alt={item.title}
          />
          <p className="overflow-hidden mt-2.5 text-sm leading-none text-zinc-900">
            {item.title}
          </p>
          <div className="flex gap-1.5 self-start mt-1.5 text-base font-bold leading-none">
            {item.discount && (
              <span className="grow text-pink-600">{item.discount}</span>
            )}
            <span className="text-zinc-900">{item.price}</span>
            <span className="text-sm leading-none text-zinc-900">원~</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const HotLeisureSection: React.FC = () => {
  const topTabs = ["MD추천", "스페셜 특가"];
  const bottomTabs = ["추천 내륙 놀거리", "추천 제주 놀거리"];

  const topItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/bad00587d17b75bb4b9dc00da45a9e4f2ed45d53?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      title: "코엑스아쿠아리움",
      price: "22,000",
      discount: "33%"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e592f22332d4646bf4559371e3a1863d8b8ce8b?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      title: "[★특가★][춘천] 레고랜드 1일",
      price: "40,000",
      discount: "27%"
    }
  ];

  const bottomItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c736241466256ff10962d6273b5d0bf824f73083?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      title: "★LIVE 특가★ 대구 이월드 연",
      price: "94,900",
      discount: "52%"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5448499869c18aac2ec9e52c88e2548b0a913a4?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      title: "한국민속촌 공포체험 살귀옥/혈",
      price: "8,000"
    }
  ];

  return (
    <section>
      <h2 className="px-4 py-3.5 mt-8 text-lg font-bold leading-none bg-white min-h-[50px] text-zinc-900">
        오늘의 HOT! 레저/티켓
      </h2>

      <div className="flex flex-col items-start pl-4 w-full">
        <div className="flex gap-2 self-stretch text-sm leading-4">
          <div className="flex-1">
            <LeisureTabs tabs={topTabs} />
            <LeisureGrid items={topItems.slice(0, 1)} />
          </div>
          <div className="flex-1">
            <LeisureTabs tabs={bottomTabs} />
            <LeisureGrid items={topItems.slice(1, 2)} />
          </div>
        </div>

        <LeisureGrid items={bottomItems} />
      </div>
    </section>
  );
};

export default HotLeisureSection; 