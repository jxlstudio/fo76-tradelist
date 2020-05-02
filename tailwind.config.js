module.exports = {
  theme: {
    extend: {
      fontFamily: {
          sans: 'Ubuntu, "Helvetica Neue", Arial, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", sans-serif',
          body: 'Ubuntu, "Helvetica Neue", Arial, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fallout: 'Ubuntu, "Helvetica Neue", Arial, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", sans-serif'
      },
      colors: {
        'fallout-yellow': '#FEF265',
        'fallout-blue': '#325886',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'dark-hover', 'dark-group-hover', 'even', 'odd', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'dark-focus', 'dark-focus-within', 'even', 'odd', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'dark-hover', 'dark-active', 'even', 'odd', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'dark-hover', 'dark-active', 'even', 'odd', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'dark-hover', 'dark-active', 'even', 'odd', 'group-hover'],
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
