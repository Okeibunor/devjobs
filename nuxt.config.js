export default {
  mode: 'universal',
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devjobs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-simple-markdown.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',

  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    // Do away with the baseUrl when using proxy
    proxy: true
  },

  proxy: {
    // Simple proxy
    "/api/": {
      target: "https://jobs.github.com/",
      pathRewrite: { "^/api/": "" }
    }
  },
  styleResources: {
    scss: [
      '~/assets/scss/main.scss',
    ]
  }

}
