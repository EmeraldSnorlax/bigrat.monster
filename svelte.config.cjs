const sveltePreprocess = require('svelte-preprocess')
const ssr = require('@sveltejs/adapter-static')
const pkg = require('./package.json')

const fs = require('fs')

let base;

if (fs.existsSync('./CNAME') || process.env.NODE_ENV === 'development') {
  base = ''
} else {
  base = '/bigrat.monster'
}

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
  kit: {
    adapter: ssr(),
    target: '#svelte',
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    },
    paths: {
      assets: base,
      base: base,
    }
  }
}
