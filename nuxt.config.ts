import NuxtConfiguration from '@nuxt/config'

const isProxy = (process.env.NUXT_PROXY || 'true').toLowerCase() === 'true'

const basic: NuxtConfiguration = {
  env: {},
  head: {
    title: "nuxt-typescript",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: "Nuxt.js TypeScript project"}
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
    ]
  },
  loading: {color: "#3B8070"},
  css: ["~/assets/css/main.css"],
  build: {},
  modules: [
    "@nuxtjs/axios",
  ],
  axios: { timeout: 3000 }
}

const proxy: NuxtConfiguration = {
  modules: [ ...basic.modules, '@nuxtjs/proxy'],
  axios: { ...basic.axios, proxy: true},
  proxy: {
    '/server': {
      target: 'http://127.0.0.1:3001',
      pathRewrite: {'^/server': '/'}
    }
  }
}

const middleware: NuxtConfiguration = {
  axios: {
    ...basic.axios,
    baseURL: 'http://127.0.0.1:3000', proxy: false
  },
  serverMiddleware: [
    {path: '/server', handler: '~/server/index'}
  ]
}

const getConfig = () => {
  console.log('isProxy', isProxy)
  if (isProxy) {
    return {
      ...basic, ...proxy,
    }
  }
  return {...basic, ...middleware}
}

const config = getConfig()

export default config