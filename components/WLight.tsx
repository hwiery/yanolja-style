"use client";
import React from "react";
import HeaderSection from "./HeaderSection";
import CategoryNavigation from "./CategoryNavigation";
import NotificationButton from "./NotificationButton";
import HotelListings from "./HotelListings";
import LiveEvents from "./LiveEvents";
import LeisureTickets from "./LeisureTickets";
import PerformanceExhibitions from "./PerformanceExhibitions";
import PromotionSection from "./PromotionSection";
import FooterSection from "./FooterSection";
import BottomNavigation from "./BottomNavigation";
import SpecialDeals from "./SpecialDeals";
import HotelCategoryTabs from "./HotelCategoryTabs";
import BannerSection from "./BannerSection";
import PromoButtons from "./PromoButtons";
import WeatherSection from "./WeatherSection";
import UrbanVacationSection from "./UrbanVacationSection";
import HotLeisureSection from "./HotLeisureSection";
import HotPerformanceSection from "./HotPerformanceSection";
import SpecialDealSection from "./SpecialDealSection";

function WLight() {
  return (
    <main className="px-2 pb-2 mx-auto w-full bg-white max-w-[480px]">
      <HeaderSection />

      <section className="flex overflow-hidden flex-col pt-4 mt-0 bg-white rounded-3xl shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
        <NotificationButton />
        <CategoryNavigation />
        
        <BannerSection />
        <PromoButtons />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/02cd437df085ae6adc8917d579deb39ca65accbd?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain mt-7 aspect-[4.48] w-[358px]"
          alt="Banner"
        />

        <BottomNavigation />
        <LiveEvents />
        <HotelCategoryTabs />
        <HotelListings />
        <SpecialDeals />
        <LeisureTickets />
        <PerformanceExhibitions />

        <section className="flex flex-col items-center py-4 mt-4 w-full font-bold text-zinc-900">
          <h2 className="flex-1 shrink self-stretch px-4 py-3.5 w-full text-lg leading-none bg-white basis-0 min-h-[50px]">
            기획전 모음
          </h2>
          <div className="overflow-hidden pb-4 max-w-full text-xs text-white rounded-xl w-[358px]">
            <div className="flex gap-px">
              <PromotionSection
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/18f98c2faef30146517c5a42e672de61d7e1d2ee?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                tag="MD추천"
                title="봄 연휴에 가기 좋은 펜션"
                subtitle="특별한 가격 + 선착순 할인 쿠폰"
              />
              <PromotionSection
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/59d290c500dce07e2a2cfa5d628416f7b16a9823?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                tag="MD추천"
                title="커피값으로 가는 대실☕"
                subtitle="1시간 5천원 아래 가성비 최고 대"
              />
            </div>
            <div className="flex gap-px">
              <PromotionSection
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d11660309c9095bedf2ed746b5260ad6a4e55c38?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                tag="MD추천"
                title="레이트체크아웃 숙소"
                subtitle="여유로운 퇴실로 편하게 즐겨요!"
              />
              <PromotionSection
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/999ad1bccedd83d1deaf845b9da13d7aa1ca8d3d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                tag="MD추천"
                title="골드회원 모텔 할인⭐"
                subtitle="특가에 쿠폰까지!"
              />
            </div>
            <div className="flex gap-px">
              <PromotionSection
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cd61b0832731aec6249580b3a32e435083c62792?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                tag="MD추천"
                title="휘닉스 브랜드 3개 지점"
                subtitle="단독특가★"
              />
              <PromotionSection
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6702f8a2003f2bd46f69776bcc00512eb8e565?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
                tag="MD추천"
                title="신화월드 브랜드 3개 지점"
                subtitle="이번주 특가★"
              />
            </div>
          </div>
          <button className="flex justify-center items-center px-4 pt-3 pb-3 max-w-full text-sm font-bold leading-none text-center bg-white rounded-lg border border-gray-300 border-solid min-h-10 w-[358px]">
            <span className="overflow-hidden self-stretch my-auto">
              기획전 모음 <span className="font-normal">전체보기</span>
            </span>
          </button>
        </section>
      </section>

      <SpecialDealSection />
      <WeatherSection />
      <UrbanVacationSection />
      <HotLeisureSection />
      <HotPerformanceSection />

      <FooterSection />
    </main>
  );
}

export default WLight;
