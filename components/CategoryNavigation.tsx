"use client";
import * as React from "react";

interface CategoryItemProps {
  imageSrc: string;
  label: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageSrc, label }) => {
  return (
    <button className="flex flex-col flex-1 justify-center items-center">
      <img
        src={imageSrc}
        className="object-contain w-12 aspect-square"
        alt={label}
      />
      <span className="mt-1">{label}</span>
    </button>
  );
};

const CategoryNavigation: React.FC = () => {
  return (
    <>
      <div className="flex self-center mt-6 w-full max-w-xs text-xs leading-none text-center whitespace-nowrap text-zinc-900">
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/91ddc1cc4f73e2d5d038fed093520686344cd792?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="호텔/리조트" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/eb29bb09bd21afe172ac461a60c448523dad12e0?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="펜션/풀빌라" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f35d792ed4079009ec53cccd3acbca72f7edcc?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="프리미엄" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/308d4e9df387fbf0cba2f6063082a33b0a8350e9?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="글램핑/캠핑" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c91ac6b4a09b35473d61b74184c33a163b68dd51?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="모텔" />
      </div>
      <div className="flex self-center mt-4 w-full max-w-xs text-xs leading-none text-center whitespace-nowrap text-zinc-900">
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/59fdae9d4a635976bc4d52ce3af72f204167a576?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="항공" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/97f5699e44f3bc123270a14a4866b6ffe4a829b8?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="해외숙소" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4567a42e2c577c2385025edbcd987a9299b7a78e?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="교통" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/51429789f132bf42ebf7515d15ffeb70fe63a456?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="레저/티켓" />
        <CategoryItem imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3159f4233affa28ff472e53d64065b0e4143cb?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982" label="공연/전시" />
      </div>
    </>
  );
};

export default CategoryNavigation; 