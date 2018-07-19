const { resolve } = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'zezic.ru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sergey Ukolov personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00ffcc' },
  /*
  ** Build configuration
  */
  sassResources: [
    resolve(__dirname, 'assets/sass/_app.sass')
  ],
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /^(?!.*inline\.svg).*\.(png|jpe?g|gif|svg)$/

      config.module.rules.push({
        test: /\.inline.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader'
          },
          // {
          //   loader: 'raw-loader'
          // },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false, currentColor: true}},
                {convertPathData: false},
                {removeDimensions: false}
              ]
            }
          }
        ]
      })
    }
  }
}
