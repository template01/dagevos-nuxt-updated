module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#552E87' },
  css: [
    // { src: '~assets/css/main1.scss', lang: 'scss' },
    '~assets/css/main.css',
    '~assets/css/font-awesome.min.css',
    '~/assets/fonts/coolvetica+aileron/stylesheet.css',
    '~assets/css/compiledbootstrap/bootstrap.css',
    //'bootstrap/dist/css/bootstrap.css',
    //'bootstrap-vue/dist/bootstrap-vue.css'

  ],

  plugins: ['~plugins/bootstrap-vue-plugin','~/plugins/lodash-plugin.js','~/plugins/vue-resource-plugin.js',{ src: '~/plugins/vueawesomeswiper-plugin.js', ssr: false }],


  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */

    vendor: ['axios','bootstrap-vue','vue-awesome-swiper']
  }
}
