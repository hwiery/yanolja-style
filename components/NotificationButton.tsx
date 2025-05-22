"use client";
import React from "react";

const NotificationButton = () => {
  return (
    <button className="flex gap-2 items-center px-3 py-2.5 mx-4 w-full text-center rounded-xl bg-slate-50 max-w-[358px] min-h-10">
      <span className="self-stretch px-1.5 py-1 my-auto text-xs font-bold leading-none text-white whitespace-nowrap bg-indigo-600 rounded-full min-h-5">
        공지
      </span>
      <p className="overflow-hidden self-stretch my-auto text-sm leading-none text-black">
        새로워진 NOL을 소개합니다!
      </p>
    </button>
  );
};

export default NotificationButton;
