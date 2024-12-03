/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan:"#00D5FE",
        textprimary:"#0C1A40",
        toptext:"#373737",
        toptext2:"#343839",
        toptext3:"#020202",
        socialcolor1:"#5BA8FD",
        socialcolor2:"#60E188",
        socialcolor3:"#FDB157",
        primary:"#FF6B6D",
        footertext:"#E8E8E8",
        footerbg:"#223668"
      },
    },
  },
  plugins: [],
};
