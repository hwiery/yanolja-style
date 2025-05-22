/**
 * AppLayout 컴포넌트
 * 페이지 전반에 적용되는 공통 레이아웃(헤더, 푸터 등)을 정의합니다.
 */
'use client';

import React, { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        {/* TODO: 공통 헤더 컴포넌트 삽입 */}
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-gray-100 text-center py-4">
        {/* TODO: 공통 푸터 컴포넌트 삽입 */}
      </footer>
    </div>
  );
} 