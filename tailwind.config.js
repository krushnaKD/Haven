/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { boxShadow: {
      'custom-inset': 'inset 0 -190px 500px -50px rgba(255, 255, 255, 0.5)',
    },},
  },
  plugins: [],
};
