"use client";
import React from "react";
import CityTabs from "./CityTabs";
import Card from "./ui/Card";

interface HotelCardProps {
  image: string;
  name: string;
  price: string;
  discount?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ image, name, price, discount }) => {
  return (
    <Card
      image={image}
      imageAlt={name}
      title={name}
      price={price}
      discount={discount}
      className="flex-1"
    />
  );
};

const WeatherSection: React.FC = () => {
  const hotels = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/07a493c3c00170c0794ccbb8b084539f017bbd2e?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      name: "강릉 세인트존스호텔",
      price: "39,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/60558d6b33a1536235e6e5c831774bbd9e580dac?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      name: "스카이베이 호텔 경포",
      price: "250,470"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc81e2f1d0783cc989d35b0a4046f373cba61c74?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      name: "휘닉스 리조트 평창",
      price: "104,000",
      discount: "4%"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/318427a658d68424751d9bded4253a36beb6fc24?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      name: "호텔 탑스텐 정동진",
      price: "149,000",
      discount: "25%"
    }
  ];

  return (
    <section className="mt-14 w-full">
      <h2 className="px-4 py-3.5 text-lg font-bold leading-none bg-white min-h-[50px] text-zinc-900">
        호캉스 가기 좋은 날씨
      </h2>

      <CityTabs />

      <div className="px-4 mt-4 w-full">
        <div className="grid grid-cols-2 gap-3">
          {hotels.slice(0, 2).map((hotel, index) => (
            <HotelCard
              key={index}
              image={hotel.image}
              name={hotel.name}
              price={hotel.price}
              discount={hotel.discount}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {hotels.slice(2, 4).map((hotel, index) => (
            <HotelCard
              key={index}
              image={hotel.image}
              name={hotel.name}
              price={hotel.price}
              discount={hotel.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeatherSection; 