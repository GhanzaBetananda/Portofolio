/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12141A',
        muted: '#66707A',
        surface: '#F6F7F9',
        line: '#E6E8EC',
        accent: '#2954FF',
        'accent-soft': '#EAF0FF',
        console: '#0F1115',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18, 20, 26, 0.05)',
        lift: '0 16px 40px -20px rgba(18, 20, 26, 0.2)',
      },
    },
  },
  plugins: [],
}
