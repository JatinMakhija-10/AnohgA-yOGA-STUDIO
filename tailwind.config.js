/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        linen:      '#F6F2EA',
        travertine: '#ECE5D8',
        bark:       '#1E251E',
        espresso:   '#181614',
        umber:      '#5E584F',
        terra:      '#B85A3A',
        'terra-hover': '#9E482B',
        moss:       '#3A4D39',
        hairline:   '#DAD1C0',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans:   ['"Plus Jakarta Sans"', 'sans-serif'],
        mono:   ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest:   '0.18em',
        wider:    '0.14em',
        wide:     '0.08em',
      },
      lineHeight: {
        editorial: '1.04',
        tight:     '1.08',
      },
    },
  },
  plugins: [],
  safelist: [],
}
