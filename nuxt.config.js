export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-theory',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],

  },
  loading: {
    color: 'blue'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'bootstrap-vue/nuxt'
  ],
  axios: {
    baseURL: process.env.API_URL,
  },

  auth: {
    strategies: {
      local: {
        redirect: {
          login: '/login',
          home: '/',
          callback: '/login'
        },
        token: {
          required: true,
          type: 'Bearer',
          prefix: '_token.',
          global: true
        },
        endpoints: {
          login: {
            url: 'http://cafe.lc/api' + '/login',
            method: 'post'
          },
          user: {
            url: 'http://cafe.lc/api' + '/users',
            method: 'get'
          }
        }
      }
    },

  },
  toast: {
    position: 'top-center',
    duration: 3000,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
