module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        bigrat: 'url(\'bigrat.png\')'
      }
    }
  }
}
