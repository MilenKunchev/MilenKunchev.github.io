/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          dark: "var(--color-secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          active: "var(--color-accent-active)",
          green: "var(--color-accent-green)",
        },
        neutral: {
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
        },
        background: {
          page: "var(--color-bg-page)",
          surface: "var(--color-bg-surface)",
          muted: "var(--color-bg-muted)",
          dark: "var(--color-bg-dark)",
          footer: "var(--color-bg-footer)",
          overlay: "var(--color-bg-overlay)",
        },
        "brand-green": "var(--color-brand-green)",
        error: "var(--color-error)",
        border: {
          DEFAULT: "var(--color-border)",
        },
        social: {
          facebook: "var(--color-social-facebook)",
          instagram: "var(--color-social-instagram)",
          linkedin: "var(--color-social-linkedin)",
        },
      },
    },
  },
};
