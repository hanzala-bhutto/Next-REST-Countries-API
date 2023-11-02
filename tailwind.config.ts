import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
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


    },
  },
  plugins: [],
}
export default config
