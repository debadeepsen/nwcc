import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#35a9f2'
  },
  loading: {
    color: '#35a9f2'
  },
  css: ['@@/assets/css/main.css'],
  router: {
    base: '/e2edoc/'
  }
})
