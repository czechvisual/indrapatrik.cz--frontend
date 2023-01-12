export default defineNuxtConfig({
    app: {
        "baseURL": process.env.BASE_URL || "/",
        "cdnURL": process.env.CDN_URL,
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
                { src: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.9/dist/cookieconsent.js', body: true },
                { src: 'cookieconsent-init.js', body: true }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.9/dist/cookieconsent.css', media: 'print', onload:'this.media=\'all\'' }
            ]
        }
    },
    script: [
        {
            src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
        }
    ],
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '@/assets/sass/main.sass'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@use "@/assets/sass/_variables.sass" as *\n'
                }
            }
        },
        define: {
            'process.env.DEBUG': false,
        }
    },
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/i18n',
        'nuxt-icon'
    ],
    image: {
        cloudinary: {
            baseURL: process.env.CDN_URL
        },
        strapi: {
            baseURL: 'http://localhost:1337/uploads/'
        }
    },
    i18n: {
        locales: [
            {
                code: 'cs',
                name: 'Czech',
                iso: 'cs-CZ',
                file: 'cs.json'
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en.json'
            }
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'cs',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        },
        vueI18n: {
            legacy: false,
            locale: 'cs'
        }
    }
})
