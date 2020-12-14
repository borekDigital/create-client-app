import colors from 'vuetify/es5/util/colors'

export default {
  <%_ if (mode === 'spa') { _%>
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  <%_ } _%>

  <%_ if (target === 'static') { _%>
  // Target: https://go.nuxtjs.dev/config-target
  target: '<%= target %>',

  <%_ } _%>
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - <%= name %>',
    title: '<%= name %>',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',

    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    <%_ if (axios) { _%>
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    <%_ } _%>
  ],
  <%_ if (axios) { _%>

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  <%_ } _%>

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
