import { defineConfig } from "vitepress";
// import path from "path";
// import fs from "fs";
// import { DEFAULT_ENCODE } from "vitepress-sls-blog-tmpl/src/constants.js";
import { removeH1Plugin } from "vitepress-sls-blog-tmpl/src/helpers/mdit-remove-h1.js";
import { transformTitle } from "vitepress-sls-blog-tmpl/src/helpers/transformTitle.js";
import { makeCommonTheme } from "./themeLocaleconfig.js";
import en from "./locales/en";
import ru from "./locales/ru";

export default defineConfig({
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]],
  head: [
    ["script", { src: "https://yastatic.net/share2/share.js" }],
    // [
    //   "script",
    //   { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    // ],
  ],
  outDir: "../docs",
  cacheDir: "../.cache",
  metaChunk: true,
  cleanUrls: true,
  lang: "en-US",
  sitemap: {
    hostname: "https://blog.prjedem.org",
  },
  locales: {
    root: {
      lang: "en-US",
    },
    en: {
      lang: "en-US",
      ...makeCommonTheme(en, "en"),
    },
    ru: {
      lang: "ru-RU",
      ...makeCommonTheme(ru, "ru"),
    },
  },
  themeConfig: {
    i18nRouting: true,
    externalLinkIcon: true,
    tagsBaseUrl: "/tag",
    allTagsUrl: "/tags",
    archiveBaseUrl: "/archive",
    recentBaseUrl: "/recent",
  },
  transformPageData(pageData, ctx) {
    transformTitle(pageData, ctx);
  },
  markdown: {
    config: (md) => {
      md.use(removeH1Plugin);
    },
  },
});
