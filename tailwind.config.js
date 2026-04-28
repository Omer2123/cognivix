/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Add this if you have a pages folder
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        base: 'rgb(var(--color-base) / <alpha-value>)',
        basetext: 'rgb(var(--color-base-text) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        darktext: 'rgb(var(--color-dark-text) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}