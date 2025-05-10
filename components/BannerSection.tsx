"use client";
import React from "react";
import ImageSlider from "./ui/ImageSlider";

const BannerSection: React.FC = () => {
  const bannerImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1096d83f9fdd6bb6125d5f3cd425806bdb072b2?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982",
      alt: "프로모션 배너"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 mt-6">
        <ImageSlider images={bannerImages} />
      </div>

      <div className="flex flex-col pl-4 mt-2 w-full">
        <div className="flex gap-2.5 self-center max-w-full w-[249px]">
          <div className="flex gap-1 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e2d77d45b0ad557b9a16af936679189ad108b8?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
              className="object-contain shrink-0 w-3.5 aspect-square"
              alt="Icon"
            />
            <div className="flex shrink-0 my-auto w-px h-2 bg-gray-200" />
          </div>
          <div className="flex gap-2.5">
            <div className="my-auto">
              <div className="flex z-10 shrink-0 ml-3 h-0.5 rounded-3xl bg-zinc-900 w-[11px]" />
              <div className="flex shrink-0 h-px bg-gray-300 rounded-xl" />
            </div>
            <div className="flex gap-1 py-1 pr-1.5 pl-2.5 rounded-full bg-slate-50">
              <span className="text-xs font-bold leading-tight text-center text-zinc-900">02</span>
              <span className="text-xs leading-none text-center text-zinc-900">/</span>
              <div className="flex">
                <span className="grow text-xs leading-tight text-center text-zinc-900">14</span>
                <div className="flex flex-col justify-center min-h-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/073082e88eb799f981925c09a79294c4956acce3?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                    className="object-contain flex-1 w-3 aspect-square"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection; 