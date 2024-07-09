import blogConfigBase from "vitepress-sls-blog-tmpl/src/configs/blogConfigBase.js";
import { makeCommonTheme } from "./themeLocaleconfig.js";
import en from "./locales/en";
import ru from "./locales/ru";

export default {
  ...blogConfigBase,
  title: en.title,
  description: en.description,
  //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]],
  head: [
    // yandex social shares
    ["script", { src: "https://yastatic.net/share2/share.js" }],
    // [
    //   "script",
    //   { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    // ],
  ],
  sitemap: {
    hostname: "https://blog.prjedem.org",
  },
  locales: {
    ...blogConfigBase.locales,
    en: {
      lang: "en-US",
      ...makeCommonTheme(en, "en"),
    },
    ru: {
      lang: "ru-RU",
      ...makeCommonTheme(ru, "ru"),
    },
  },
  themeConfig: blogConfigBase.themeConfig,
};
