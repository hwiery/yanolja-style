"use client";
import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import BannerSection from "./BannerSection";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SortSelect from "./SortSelect";
import FeaturedGrid from "./FeaturedGrid";
import RecommendationSlider from "./RecommendationSlider";
import SummerSection from "./SummerSection";
import DiscountSection from "./DiscountSection";
import PopularSection from "./PopularSection";
import RegionSection from "./RegionSection";

function WLight() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <main className="px-2 pb-2 mx-auto w-full bg-white max-w-[480px]">
      <HeaderSection />
      <BannerSection />
      <SearchBar onSearch={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} />

      <section className="flex overflow-hidden flex-col pt-4 mt-0 bg-white rounded-3xl shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
        <SortSelect selected={sortOption} onChange={setSortOption} />
        
        <FeaturedGrid category={selectedCategory} sortOption={sortOption} />
        <RecommendationSlider />
        <SummerSection />
        <DiscountSection />
        <PopularSection />
        <RegionSection />

        {/* PromoButtons and BottomNavigation removed per cleanup */}
      </section>
    </main>
  );
}

export default WLight;
