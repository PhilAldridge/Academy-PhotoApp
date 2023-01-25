// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // server side rendering mode
    ssr: false,

    css: ['@/assets/css/main.css'],

    // experimental features
    experimental: {
      reactivityTransform: false,
    },
  
    // auto import components
    components: true,
   
    // app config
    app: {
        baseURL: "/",
        head: {
            "title": "hackday-1-boilerplate",
            "meta": [
                {
                    "name": "viewport",
                    "content": "width=device-width, initial-scale=1"
                },
                {
                    "charset": "utf-8"
                },
                { name: "format-detection", content: "telephone=no" },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        }
    },
  
    // localization - i18n config
    intlify: {
      localeDir: 'locales',
      vueI18n: {
        locale: 'en',
        fallbackLocale: 'en',
        availableLocales: ['en', 'id', 'ja', 'ko'],
      },
    },
  
    
  })
