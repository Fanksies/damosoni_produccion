module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'damosoni',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Damosoni Comunicaciones, M2M SIM y IoT a tu alcance.' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  mode: 'universal',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: ['bootstrap-vue/nuxt'],
  plugins: [
    { src: '~/plugins/VueFlickity.js' }
  ]
  // plugins: [
  //   { src: '~/plugins/vue-flickity', ssr: false }
  // ]
}

