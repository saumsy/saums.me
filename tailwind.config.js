/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        accent: "#6A5ACD",
        darkbg: "#121212",
        darkcard: "#1E1E1E"
      }
    }
  },
  plugins: []
};
