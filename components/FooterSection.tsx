"use client";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="flex flex-col items-start pt-4 pb-20 pl-4 w-full bg-slate-50 shadow-[0px_0px_8px_rgba(0,0,0,0.1)]">
      <button className="flex gap-10 justify-between items-center px-3.5 py-2.5 text-xs leading-none text-center text-black bg-white rounded-md border border-gray-300 border-solid">
        <span className="self-stretch my-auto">패밀리 사이트</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/02f26f3cd8c3cd3f360e05399e1fdb6d118d0477?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          alt="Arrow down"
        />
      </button>

      <div className="flex gap-5 justify-between self-stretch mt-7 w-full">
        <div className="overflow-hidden my-auto">
          <div className="flex overflow-hidden flex-col justify-center items-center min-h-[18px] w-[49px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b60dca997cfcbe2beb13fa6ba3a05d027f5694e6?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
              className="object-contain w-full aspect-[2.72]"
              alt="NOL"
            />
          </div>
        </div>
        <button className="flex gap-5 items-center text-sm font-bold text-center whitespace-nowrap text-neutral-500">
          <span className="self-stretch my-auto">사업자정보</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/034049b80203814d21e9c09a04c04ff084255bff?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.69] w-[11px]"
            alt="Arrow"
          />
        </button>
      </div>

      <nav className="flex gap-1 mt-7 text-xs leading-none underline whitespace-nowrap text-neutral-500">
        <div className="flex gap-1">
          <a href="#" className="py-px">회사소개</a>
          <a href="#" className="py-px">광고제휴문의</a>
          <a href="#" className="py-px">인재채용</a>
        </div>
        <div className="flex gap-0.5">
          <a href="#" className="py-px font-bold">개인정보처리방침</a>
          <a href="#" className="py-px">청소년보호정책</a>
        </div>
      </nav>

      <nav className="flex gap-0.5 mt-1.5 text-xs leading-none underline text-neutral-500">
        <a href="#" className="py-px">서비스 이용약관</a>
        <a href="#" className="py-px">위치정보 이용약관</a>
        <a href="#" className="py-px">사업자 정보확인</a>
      </nav>

      <nav className="flex mt-1.5 text-xs leading-none underline text-neutral-500">
        <a href="#" className="py-px">전자금융거래 이용약관</a>
        <a href="#" className="py-px">전자금융거래 이용자 유의사항</a>
        <a href="#" className="py-px whitespace-nowrap">분쟁해결기준</a>
      </nav>

      <div className="flex gap-5 items-center py-0.5 pr-52 pl-0.5 mt-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/241db32bbabead3f3930f15ed4400b5d55d4c01d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
          alt="Social icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fed3f88bf49b74fe5936977b882e3246465f127?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.4] w-[21px]"
          alt="Social icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/692a88fe1dc6e1b21f6d1a11bae773501a4680b5?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[0.48]"
          alt="Social icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cec37dcdf74001ae0faf0fa36b94599d473be1d?placeholderIfAbsent=true&apiKey=53b424a4f91e4b54907a34aceb89e982"
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.12] w-[34px]"
          alt="Social icon"
        />
      </div>

      <p className="mt-3 text-xs leading-4 text-neutral-500">
        (주)놀유니버스는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이<br />
        용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
      </p>

      <p className="text-xs leading-4 text-neutral-500">
        (주)놀유니버스가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트 정<br />
        보, 디자인 및 화면의 구성, UI를 포함하여 일체이 콘텐츠에 대한 무단 복제, 배포, 방<br />
        송 또는 전송, 스크래핑 등의 행위는 저작권법 및 콘텐츠산업 진흥법 등 관련 법령에<br />
        의하여 엄격히 금지됩니다.
      </p>

      <button className="self-stretch text-xs text-center underline text-neutral-500">
        콘텐츠산업 진흥법에 따른 표시
      </button>

      <div className="flex shrink-0 mt-2.5 max-w-full h-px border-t border-gray-300 w-[358px]" />

      <p className="mt-6 text-xs leading-none text-neutral-500">
        ⓒ Nol Universe Co., Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
