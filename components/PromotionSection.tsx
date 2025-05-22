"use client";
import React from "react";

interface PromotionSectionProps {
  imageSrc: string;
  tag: string;
  title: string;
  subtitle: string;
}

const PromotionSection = ({
  imageSrc,
  tag,
  title,
  subtitle
}: PromotionSectionProps) => {
  return (
    <div className="flex overflow-hidden relative flex-col aspect-square w-[179px]">
      <img
        src={imageSrc}
        className="object-cover absolute inset-0 size-full"
        alt={title}
      />
      <div className="relative pt-2 pr-4 pb-4 pl-2 w-full bg-black bg-opacity-30 h-[179px]">
        <div className="leading-3 text-center whitespace-nowrap bg-white rounded-md text-zinc-900 w-[49px]">
          <div className="flex-1 shrink self-stretch px-1.5 py-1 w-full rounded-md basis-0 bg-white bg-opacity-80 min-h-5">
            {tag}
          </div>
        </div>
        <h3 className="overflow-hidden mt-16 text-lg leading-6">
          {title.includes("<br />") ? (
            <>
              {title.split("<br />")[0]}<br />
              {title.split("<br />")[1]}
            </>
          ) : (
            title
          )}
        </h3>
        <p className="overflow-hidden mt-1 leading-none">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PromotionSection;
