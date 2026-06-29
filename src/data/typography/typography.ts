// src/config/typography.ts

export const typography = {
  font: {
    sans: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  },

  heading: {
    hero: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
    h1: "text-3xl md:text-4xl font-bold leading-tight",
    h2: "text-2xl md:text-3xl font-bold leading-snug",
    h3: "text-xl md:text-2xl font-semibold",
    h4: "text-lg font-semibold",
  },

  body: {
    xl: "text-xl leading-8",
    lg: "text-lg leading-8",
    md: "text-base leading-7",
    sm: "text-sm leading-6",
    xs: "text-xs leading-5",
  },

  button: {
    lg: "text-base font-semibold",
    md: "text-sm font-medium",
    sm: "text-xs font-medium",
  },

  label: {
    default: "text-sm font-medium uppercase tracking-wide",
  },

  caption: {
    default: "text-sm text-gray-500",
  },

  link: {
    default: "font-medium hover:underline",
  },

  list: {
    default: "leading-8",
  },
};