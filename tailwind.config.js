/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "app-border-color-01": "#64748B",
        "app-base": "#0F172A",
        "table-line": "#EDF2F7",
        "bg-button": "#D71C5D",
        "color-main": "#64748B",
        "select-box": "#F1F5F9",
    },
    boxShadow: {
      'header': '0px 3px 5px rgba(0, 0, 0, 0.05)',
    },
    },
    fontSize: {
      sm: ['13px', '20px'],
      base: ['15px', '22px'],
      '3xl': ['32px', '48px'],  
    },
  },
  plugins: [],
}
