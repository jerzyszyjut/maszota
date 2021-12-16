module.exports = {
  publicPath: '/',

  pluginOptions: {
    i18n: {
      locale: 'pl',
      fallbackLocale: 'pl',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
