"use client";
import React from "react";
import Button from "./ui/Button";

interface PromoButtonProps {
  icon: string;
  label: string;
}

const PromoButton: React.FC<PromoButtonProps> = ({ icon, label }) => {
  return (
    <Button
      variant="secondary"
      size="sm"
      className="flex gap-0.5 justify-center items-center min-h-10"
    >
      <img
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto aspect-square max-w-[390px] w-[18px]"
        alt={`${label} 아이콘`}
      />
      <span className="self-stretch my-auto">{label}</span>
    </Button>
  );
};

const PromoButtons: React.FC = () => {
  const promoButtons = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/db771284f4b49e265f079459400acf0e09078e18?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      label: "NOL드로우"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd8e00438075fc727db7356f5003d6f8b4aa1d54?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      label: "CJ추가적립"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/01848885be5cff5f16fb01640e18633336201b92?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      label: "이번달쿠폰팩"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ec3728d780039fbacfc6a4d84085fc27ffacc0b?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      label: "이벤트더보기"
    }
  ];

  return (
    <div className="flex gap-px mt-6 w-full text-xs leading-none text-black whitespace-nowrap">
      {promoButtons.map((button, index) => (
        <PromoButton key={index} icon={button.icon} label={button.label} />
      ))}
    </div>
  );
};

export default PromoButtons; 