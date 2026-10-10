/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // The app sets data-theme="light|dark" on <html>, so dark: follows that attribute.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Theme colors stay as CSS variables (defined in src/index.css) so the dark toggle keeps working.
      colors: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        onaccent: 'var(--onaccent)',
        soft: 'var(--soft)',
        line: 'var(--line)',
        pink: 'var(--pink)',
      },
      fontFamily: {
        display: ['var(--display)'],
        body: ['var(--body)'],
      },
      backgroundImage: {
        arch: 'linear-gradient(160deg,var(--soft),var(--pink))',
        'card-main': 'linear-gradient(180deg,var(--card),var(--soft))',
      },
    },
  },
  plugins: [],
}
