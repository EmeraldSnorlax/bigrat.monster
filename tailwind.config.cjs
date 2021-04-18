module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bigrat-img': 'url(\'bigrat.png\')'
      },
      colors: {
        error: { DEFAULT: '#d6351c' },
        'true-gray': { 
          dark: '#121212',
          DEFAULT: '#212121',
          bigrat: '#4b4c51',
          light: '#313131',
          lighter: '#424242',
          lightest: '#515151',
        },
      }
    },
  }
}
