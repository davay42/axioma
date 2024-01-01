import { defineConfig } from 'vitepress'

const isProd = process.env.NODE_ENV === "production";

const site = isProd ? "https://axioma.defucc.me" : "http://localhost:3000";

export const metaData = {
  title: "Axioma",
  description: "Visual geometry study",
  site,
  locale: "en",
  icon: "/logo/gray.svg",
  author: "Axioma.center",
  tags: "geometry, animations, svg, css, platonic solid",
};


export default defineConfig({
  srcDir: 'content',
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head: [
    ['meta', { name: 'author', content: metaData?.author }],
    ['meta', { name: 'keywords', content: metaData?.tags }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'link',
      {
        rel: 'alternate icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'mask-icon', color: '#ffffff', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: metaData?.site }],
    ['meta', { name: 'twitter:title', value: metaData?.title }],
    ['meta', { name: 'twitter:description', value: metaData.description }],
    //@ts-ignore
    ['meta', { name: 'twitter:image', content: metaData?.image }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: metaData.locale }],
    ['meta', { property: 'og:site', content: metaData.site }],
    ['meta', { property: 'og:site_name', content: metaData.title }],
    ['meta', { property: 'og:title', content: metaData.title }],
    //@ts-ignore
    ['meta', { property: 'og:image', content: metaData?.image }],
    ['meta', { property: 'og:description', content: metaData.description }],

    // ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    // ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    // ['link', { href: 'https://fonts.googleapis.com/css2?family=Commissioner:wght@200;400;500;600&display=swap', rel: 'stylesheet' }],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: metaData.title,
      description: metaData.description,
    },
  },
  themeConfig: {
    logo: "/media/logo/holologo.svg",
    icon: "media/logo/icon.svg",
    repo: "https://github.com/davay42/axioma.center",
  },
  transformHead() {
    return [
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": "3d852862-f5ea-42cc-91b8-0bd53b4ee418", src: "https://stat.defucc.me/script.js" }] : null,
    ]
  }
})
