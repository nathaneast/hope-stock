import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 폰트패밀리
        roboto: ["var(--roboto)"], // 다음과 같이 배열 안에 string으로 작성합니다.
        sans: ["var(--sans)"], // 다음과 같이 배열 안에 string으로 작성합니다.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
