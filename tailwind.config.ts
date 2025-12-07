import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Siemens-inspired color palette
        siemens: {
          teal: {
            50: '#e6f7f7',
            100: '#b3e6e6',
            200: '#80d4d4',
            300: '#4dc2c2',
            400: '#1ab0b0',
            500: '#009999', // Primary Siemens teal
            600: '#008a8a',
            700: '#006b6b',
            800: '#004d4d',
            900: '#002e2e',
          },
          gray: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#495057',
            700: '#343a40',
            800: '#212529',
            900: '#1a1d20',
          },
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
