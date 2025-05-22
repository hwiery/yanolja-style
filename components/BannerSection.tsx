"use client";
import React from "react";
import dynamic from "next/dynamic";
const ImageSlider = dynamic(() => import("./ui/ImageSlider"), { ssr: false });

const BannerSection: React.FC = () => {
  // Fetch images from DB accommodations
  const [bannerImages, setBannerImages] = React.useState<{ src: string; alt: string }[]>([]);
  React.useEffect(() => {
    fetch('/api/accommodations')
      .then(res => res.json())
      .then((data) => {
        const images = data.slice(0, 2).map((item: any) => ({ src: item.imageUrl, alt: item.name }));
        setBannerImages(images);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2 mt-6">
        {bannerImages.length > 0 && <ImageSlider images={bannerImages} />}
      </div>
    </div>
  );
};

export default BannerSection; 