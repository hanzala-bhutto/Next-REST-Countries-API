import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlueDark: 'hsl(209, 23%, 22%)',
        veryDarkBlueDark: 'hsl(207, 26%, 17%)',
        veryDarkBlueLight: ' hsl(200, 15%, 8%)',
        veryLightGrayDark: 'hsl(0, 0%, 52%)',
        darkGrayLight: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'
      },
      
      spacing: {
        '1c': '1rem',
        '2c': '2rem',
        '3c': '3rem',
        '4c': '4rem',
        '5c': '5rem',
        '5.5c': '5.5rem',
      }

    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
