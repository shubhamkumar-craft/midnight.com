/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tittle:['Big Shoulders Stencil', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        tektur: ['Tektur', 'sans-serif'],
        jaini: ['Jaini', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],

      }
    },
  },
  plugins: [],
};

