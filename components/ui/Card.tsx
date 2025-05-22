"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface CardProps {
  image: string;
  imageAlt: string;
  title: string;
  discount?: string;
  price: string;
  rating?: string;
  reviews?: string;
  subtitle?: string;
  className?: string;
}

const Card = ({
  image,
  imageAlt,
  title,
  discount,
  price,
  rating,
  reviews,
  subtitle,
  className
}: CardProps) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        {/* Next/Image로 교체하여 최적화 */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="mt-2.5">
        <h3 className="overflow-hidden text-sm leading-none text-zinc-900">
          {title}
        </h3>
        
        {subtitle && (
          <p className="overflow-hidden text-xs leading-none text-neutral-500 mt-1">
            {subtitle}
          </p>
        )}
        
        <div className="flex items-center mt-1.5">
          {discount && (
            <span className="text-base leading-none text-pink-600 mr-1.5">{discount}</span>
          )}
          <span className="text-base leading-none font-bold">{price}</span>
          <span className="text-sm leading-none">원~</span>
        </div>
        
        {rating && (
          <div className="flex gap-1.5 mt-2 whitespace-nowrap">
            <div className="flex gap-0.5 font-bold leading-none">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad7416e866aa3ba74525d222f3fd31f7af4335e0?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                alt="Star"
                width={16}
                height={16}
                className="object-contain shrink-0 self-start w-4 aspect-square"
              />
              <span>{rating}</span>
            </div>
            {reviews && <span className="leading-none">{reviews}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card; 