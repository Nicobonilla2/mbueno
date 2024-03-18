import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'logo': ['prata-regular', 'sans-serif'],
        'torcao': ['torcao', 'sans-serif'],
        'opensans': ['OpenSans', 'sans-serif']
      },
      colors: {
        'blue-logo': 'rgb(25, 39, 83)', // Un ejemplo de color personalizado
      },
    },
  },
  plugins: [],
};
export default config;
