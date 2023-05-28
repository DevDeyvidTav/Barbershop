/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile': "url(/home-mobile.png)",
        'home-pc': "url(/home-pc.png)",
        'gradient': "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%)",
      },
    },
  },
  plugins: [],
}
