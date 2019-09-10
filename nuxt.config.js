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

  mode: 'spa',
  plugins: [
    { src: '~/plugins/VueFlickity.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [
        purgecss({
          content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './content/**/*.md', './content/**/*.json'],
          whitelist: ['html', 'body', 'has-navbar-fixed-top', 'nuxt-link-exact-active', 'nuxt-progress'],
          whitelistPatternsChildren: [/svg-inline--fa/, /__layout/, /__nuxt/],
        })
      ]
    },
    extend(config, {isDev, isClient}) {
      // adding the new loader as the first in the list
      config.module.rules.unshift({
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            // disable: isDev,
            placeholder: true,
            quality: 85,
            placeholderSize: 30,
            name: 'img/[name].[hash:hex:7].[width].[ext]',
            adapter: require('responsive-loader/sharp')
          }
        }
      })
      // remove old pattern from the older loader
      config.module.rules.forEach(value => {
        if (String(value.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // reduce to svg and webp, as other images are handled above
          value.test = /\.(svg|webp)$/
          // keep the configuration from image-webpack-loader here unchanged
        }
      })
    }
  },
  }

