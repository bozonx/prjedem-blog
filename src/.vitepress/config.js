// import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'
// import {
//   generateRecent,
//   generateArchiveYears,
//   generateTagsPages,
// } from 'vitepress-sls-blog-tmpl/src/helpers/generators.js'
import { DEFAULT_ENCODE } from 'vitepress-sls-blog-tmpl/src/constants.js'
import en from './locales/en'
import ru from './locales/ru'
import { makeCommonTheme } from './commonParams.js'


// const curDirName = path.dirname(__filename)
// const preBuildDirAbs = path.resolve(curDirName, '../../.prebuild') 
// const recentTmplMd = fs.readFileSync(path.join(curDirName, 'recentTmpl.md'), DEFAULT_ENCODE) 
// const archiveYearTmplMd = fs.readFileSync(path.join(curDirName, 'archiveYearTmpl.md'), DEFAULT_ENCODE) 
// const tagsPageTmplMd = fs.readFileSync(path.join(curDirName, 'tagPageTmpl.md'), DEFAULT_ENCODE) 
//
// eachLangForGeneration(curDirName, (postsDirAbs, lang) => {
//   generateRecent(preBuildDirAbs, postsDirAbs, recentTmplMd, lang)
//   generateArchiveYears(preBuildDirAbs, postsDirAbs, archiveYearTmplMd, lang)
//   generateTagsPages(preBuildDirAbs, postsDirAbs, tagsPageTmplMd, lang)
// })


export default {
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]],
  head: [
    ['script', {src: 'https://yastatic.net/share2/share.js'}]
  ],
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
      ...makeCommonTheme(en, 'en'),
    },
    ru: {
      lang: 'ru-RU',
      //link: '/ru/', 
      ...makeCommonTheme(ru, 'ru'),
    },
  },

  themeConfig: {
    i18nRouting: true,
    externalLinkIcon: false,
    tagsBaseUrl: '/tag',
    allTagsUrl: '/tags',
  },

  // async buildEnd(siteConfig) {
  //   // после всего билда в самок конце
  //   console.log(111, siteConfig)
  // },
  // async postRender(context) {
  //   // тут только content - это весь html начиная с лэйаута.
  //   // и modules - vue модули списом
  //   console.log(222, context)
  // },
  // transformPageData(pageData) {
  //   // единственная которая работает в дев режиме
  //   console.log(333, pageData)
  // },
  // transformHtml(code, id, context) {
  //   // code - то готовый html всей страницы целиком вместе с шаблоном
  //   console.log(444, id, context)
  // },
}
