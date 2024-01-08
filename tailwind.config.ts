import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'sun': 'linear-gradient(145deg, #FFF500 15%, #FFC700 100%)',
      },
      boxShadow: {
        'bright-inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.25)',
        'dark-inner': 'inset 0 2px 4px 0 rgb(255 255 255 / 0.25)',
        'dark-lg': '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);',
      }
    },
  },
  plugins: [],
}
export default config
