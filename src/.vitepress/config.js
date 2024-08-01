import blogConfigBase from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";
import { PROPS } from "./props.js";

const ru = loadBlogLocale("ru", __filename, PROPS);
const en = loadBlogLocale("en", __filename, PROPS);
const configBase = blogConfigBase(PROPS, en);

export default {
  ...configBase,
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },
  themeConfig: {
    ...configBase.themeConfig,
    showAuthorInPostList: false,
  },
  head: [
    ...configBase.head,
    // do not recognize telephone numbers on the page
    ["meta", { name: "format-detection", content: "telephone=no" }],

    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-C7GB0ER3X4",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       gtag('config', 'G-C7GB0ER3X4');`,
    ],
  ],
};
