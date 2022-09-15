module.exports = {
    // cotent: [
    //   './public/**/*.html',
    //   './src/**/*.{js.ts.jsx.tsx.vue}'
    // ],
  darkMode: false,
  theme: {
    screen: {
      // 'desktop': '1020px',
    },
    container: {
      center: true,
    },
    maxWidth: {
      "1": "100%"
    },
    extend: {},
  },
  variants: {
    extend: {}
  },
  
  content: [
  
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  plugins: []
}
