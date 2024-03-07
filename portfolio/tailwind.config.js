/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      PretendBlack: ['Pretendard-Black'],
      PretendBold: ['Pretendard-Bold'],
      PretendExtraBold: ['Pretendard-ExtraBold'],
      PretendExtraLight: ['Pretendard-ExtraLight'],
      PretendLight: ['Pretendard-Light'],
      PretendMedium: ['Pretendard-Medium'],
      PretendRegular: ['Pretendard-Regular'],
      PretendSemiBold: ['Pretendard-SemiBold'],
      PretendThin: ['Pretendard-Thin'],
    }
  },
  plugins: [],
}

