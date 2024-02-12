/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
        600: "var(--primary-600)",
      },
      secondary: {
        100: "var(--secondary-100)",
        200: "var(--secondary-200)",
        300: "var(--secondary-300)",
        400: "var(--secondary-400)",
        500: "var(--secondary-500)",
      },
      neutral: {
        DEFAULT: "var(--neutral)",
        100: "var(--neutral-100)",
        200: "var(--neutral-200)",
        300: "var(--neutral-300)",
        400: "var(--neutral-400)",
        500: "var(--neutral-500)",
        600: "var(--neutral-600)",
        700: "var(--neutral-700)",
        800: "var(--neutral-800)",
        900: "var(--neutral-900)",
      },
      success: "var(--success-state)",
      info: "var(--info-state)",
      error: "var(--error-state)",
      warning: "var(--warning-state)",

      white: "#FFF",
      black: "#000"
    },
    fontSize: {
      "header-1": "var(--header-100)",
      "header-2": "var(--header-200)",
      "header-3": "var(--header-300)",
      "header-4": "var(--header-400)",
      "header-5": "var(--header-500)",

      "sub-header-1": "var(--sub-header-100)",
      "sub-header-2": "var(--sub-header-200)",
      "sub-header-3": "var(--sub-header-300)",
      "sub-header-4": "var(--sub-header-400)",
      "sub-header-5": "var(--sub-header-500)",

      "body-1": "var(--body-100)",
      "body-2": "var(--body-200)",
      "body-3": "var(--body-300)",
      "body-4": "var(--body-400)",
      "body-5": "var(--body-500)",

      "button-1": "var(--button-100)",
      "button-2": "var(--button-200)",
      "button-3": "var(--button-300)",
      "button-4": "var(--button-400)",
      "button-5": "var(--button-500)",

      "label-1": "var(--label-100)",
      "label-2": "var(--label-200)",
      "label-3": "var(--label-300)",
      "label-4": "var(--label-400)",
      "label-5": "var(--label-500)",
      "label-6": "var(--label-600)",

      "input-1": "var(--input-100)",
      "input-2": "var(--input-200)",
      "input-3": "var(--input-300)",
      "input-4": "var(--input-400)",
      "input-5": "var(--input-500)",
      "input-6": "var(--input-600)",

      "link-1": "var(--link-100)",
      "link-2": "var(--link-200)",
      "link-3": "var(--link-300)",
      "link-4": "var(--link-400)",
      "link-5": "var(--link-500)",
      "link-6": "var(--link-600)"
    },
    extend: {

    },
  },
  plugins: [],
}

