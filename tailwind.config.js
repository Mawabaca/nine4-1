module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#f4f4f6",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        purple: {
          100: "#874B94",
          200: "#2D0054",
        },
      },
      fontSize: {
        'tiny': ['0.625rem', { lineHeight: '1rem' }], // 10px
        'xxs': ['0.75rem', { lineHeight: '1rem' }],   // 12px
        'xxl': ['1.75rem', { lineHeight: '2.25rem' }],   // 28px
        'xxxl': ['2rem', { lineHeight: '78px' }],
        'xxxxl': ['3.75rem', { lineHeight: '4.5rem' }], // 60px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
