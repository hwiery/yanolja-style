"use client";
import * as React from "react";

interface NavItemProps {
  imageSrc: string;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ imageSrc, label, isActive = false }) => {
  return (
    <button className={`flex overflow-hidden flex-col items-center self-stretch pt-0.5 my-auto w-10 rounded-xl min-h-10 ${isActive ? 'font-bold' : ''}`}>
      <img
        src={imageSrc}
        className="object-contain aspect-square w-[22px]"
        alt={label}
      />
      <span className="mt-1">{label}</span>
    </button>
  );
};

const BottomNavigation: React.FC = () => {
  return (
    <nav className="z-10 w-full text-xs leading-tight text-black whitespace-nowrap">
      <div className="flex w-full border-t border-black border-opacity-10 min-h-px" />
      <div className="flex gap-9 justify-center items-center px-2 pt-1.5 pb-2.5 max-w-full bg-white w-[390px]">
        <NavItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e533fb2aff6d094f7d0f8a5679805f22e1ea8c2a?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="검색" />
        <NavItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8d5f35cb6299d9a0cd3d38c362ffb73d36f18e?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="내주변" />
        <NavItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/86d2c79bf7bb4558c35bb42a189e42860a9356a3?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="홈" isActive={true} />
        <NavItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2d05f72ddf149c3b2108ec805b8c6fcea6f545a6?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="찜" />
        <NavItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/104fc604de7e50703bddf3f77a4b4232e7459f08?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="마이" />
      </div>
    </nav>
  );
};

export default BottomNavigation; 