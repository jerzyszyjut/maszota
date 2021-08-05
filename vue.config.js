module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/maszota/'
    : '/',
  pluginOptions: {
    i18n: {
      locale: 'pl',
      fallbackLocale: 'pl',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
