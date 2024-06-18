import { defineConfig } from "vitepress";
// import path from "path";
// import fs from "fs";
// import { DEFAULT_ENCODE } from "vitepress-sls-blog-tmpl/src/constants.js";
import { removeH1Plugin } from "vitepress-sls-blog-tmpl/src/helpers/mdit-remove-h1.js";
import { transformTitle } from "vitepress-sls-blog-tmpl/src/helpers/transformTitle.js";
import { includeAllPostPreview } from "vitepress-sls-blog-tmpl/src/helpers/includeAllPostPreview.js";
import { makeCommonTheme } from "./themeLocaleconfig.js";
import en from "./locales/en";
import ru from "./locales/ru";

export default defineConfig({
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]],
  head: [
    ["script", { src: "https://yastatic.net/share2/share.js" }],
    [
      "script",
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  ],
  outDir: "../docs",
  cacheDir: "../.cache",
  metaChunk: true,
  cleanUrls: true,
  // lang: "en-US",
  sitemap: {
    hostname: "https://example.com",
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
    externalLinkIcon: false,
    // show preview of article in article page at the top
    showArticlePreview: true,
    // if previewText is not set then get it from description
    useDescriptionForArticlePreview: true,
    tagsBaseUrl: "/tag",
    allTagsUrl: "/tags",
    archiveBaseUrl: "/archive",
    recentBaseUrl: "/recent",
  },
  transformPageData(pageData, ctx) {
    transformTitle(pageData, ctx);
    includeAllPostPreview(pageData, ctx);
  },
  markdown: {
    config: (md) => {
      md.use(removeH1Plugin);
    },
  },
});
