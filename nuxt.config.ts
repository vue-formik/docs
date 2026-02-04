// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Enable SSR for all pages
  ssr: true,

  // App configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Vue Formik - Making Forms a Breeze",
      meta: [
        {
          name: "description",
          content:
            "Vue Formik is a form library for Vue.js that helps you build forms with ease. Battle-tested, easy to use, and flexible.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "Vue Formik",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@vueformik",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo.png",
        },
      ],
    },
  },

  // CSS configuration
  css: ["@/assets/styles/tailwind.css"],

  // Modules
  modules: ["@nuxt/fonts", "shadcn-nuxt", "@nuxt/scripts"],

  // Nuxt Scripts - Google Tag Manager
  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-PPQ53DQD",
      },
    },
  },

  // Nuxt Fonts configuration
  fonts: {
    families: [
      {
        name: "Merriweather",
        provider: "google",
        weights: [300, 400, 700, 900],
        styles: ["normal", "italic"],
      },
    ],
  },

  // shadcn configuration
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./app/components/ui",
  },

  // PostCSS configuration for Tailwind CSS v4
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false, // Disable type checking during dev to avoid vite-plugin-checker issues
  },

  // Directory structure
  srcDir: "app",

  // Auto-imports configuration
  imports: {
    presets: [
      {
        from: "@iconify/vue",
        imports: ["Icon"],
      },
    ],
  },

  // Runtime config for SEO
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://vue-formik.netlify.app",
      siteName: "Vue Formik",
    },
  },
});
