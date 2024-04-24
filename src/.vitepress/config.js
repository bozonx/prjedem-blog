// import { defineConfig } from 'vitepress'
import en from './locales/en'
import ru from './locales/ru'


export default {
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]],
  outDir: '../docs',
  cacheDir: '../.cache',
  metaChunk: true,
  //lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://example.com'
  },

  lang: 'en-US',
  title: 'Blog of Project Edem',
  //titleTemplate: ':title - Custom Suffix',
  description: 'Project Edem is a anarchist community in Argentina',
  locales: {
    root: {
      lang: 'en-US',
      link: '/en/', 
      ...en,
    },
    ru: {
      lang: 'ru-RU',
      //link: '/ru/', 
      ...ru,
    },
  },

  themeConfig: {
    i18nRouting: true,
    externalLinkIcon: true,
    tagsBaseUrl: '/tags',
  }
}
