export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
            {
                rel: "stylesheet",
                href: "/css/framework.css?v=1"
            }
        ],
        script: [
            { src: "/js/jquery-3.4.1.slim.min.js" }
        ]
    },

    // server: {

    //     host: '0.0.0.0'

    // },

    pwa: {
        manifest: {
            name: 'Imperial Coaching',
            description: "Imperial Coaching",
            lang: 'en',
            display: "standalone",
            background_color: "#3b6df8",
            theme_color: "#3b6df8"
        },
        workbox: {
            runtimeCaching: [{
                // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
                urlPattern: 'https://imperialcoaching/.*',
                // Defaults to `networkFirst` if omitted
                // handler: 'networkFirst',
                // Defaults to `GET` if omitted
                // method: 'GET'
            }]
        }
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],

    styleResources: {
        scss: ['./assets/scss/*.scss']
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/carousel.js', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'vue-scrollto/nuxt',
        '@nuxtjs/style-resources'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}