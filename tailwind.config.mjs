/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — see /DESIGN.md for rationale
        ink: '#12203A',      // near-black navy — headings, primary text
        slate: '#445069',    // charcoal-blue — secondary text
        paper: '#FAFAF8',    // warm off-white — page background
        mist: '#E7E9EE',     // pale gray — borders, dividers, card backgrounds
        cobalt: {
          DEFAULT: '#2A4B8D', // deep blue — accent, links, primary actions
          50: '#EEF2F9',
          100: '#D9E1F1',
          600: '#2A4B8D',
          700: '#213C71',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.cobalt.DEFAULT'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.cobalt.DEFAULT'),
            maxWidth: '68ch',
            a: { textDecoration: 'none', fontWeight: '500' },
            'a:hover': { textDecoration: 'underline' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
