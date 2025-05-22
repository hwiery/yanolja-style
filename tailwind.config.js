/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * 색상 테마 확장
       * primary 및 secondary 색상 정의
       */
      colors: {
        primary: {
          light: '#6EE7B7', // 예: 연두빛
          DEFAULT: '#10B981', // 예: 초록
          dark: '#047857', // 예: 진한 초록
        },
        secondary: {
          light: '#93C5FD', // 예: 연한 파랑
          DEFAULT: '#3B82F6', // 예: 파랑
          dark: '#1E40AF', // 예: 진한 파랑
        },
        // 추가 색상 정의
      },
      /**
       * 폰트 패밀리 확장
       */
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
} 