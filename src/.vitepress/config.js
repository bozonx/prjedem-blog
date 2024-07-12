import blogConfigBase from "vitepress-sls-blog-tmpl/src/configs/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/src/helpers/blogConfigHelper.js";
import { PROPS } from "./props.js";

const ru = loadBlogLocale("ru", __filename, PROPS);
const en = loadBlogLocale("en", __filename, PROPS);

const configBase = blogConfigBase(PROPS, en);

export default {
  ...configBase,
  head: [
    ...configBase.head,
    // yandex social shares
    ["script", { src: "https://yastatic.net/share2/share.js" }],
    //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]]
  ],
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru },
  },
};

// export const commonParams = {
//   siteUrl: "https://prjedem.org",
//   donateIcon: "fa6-solid:heart",
//   perPage: 2,
//   paginationMaxItems: 7,
// };
// // heroFirstLine: "Блог Проекта Эдем",
// // heroSecondLine: "Анархисткие коммуны",
// // heroFirstLine: "Eden Project blog",
// // heroSecondLine: "Anarchist communes",
// export default {
//   ...blogConfigBase,
//   title: en.title,
//   description: en.description,
//   //head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
//   //head: [['link', {rel: 'stylesheet', href: '/tailwind.css'}]],
//   head: [
//     // yandex social shares
//     ["script", { src: "https://yastatic.net/share2/share.js" }],
//     // [
//     //   "script",
//     //   { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
//     // ],
//   ],
//   sitemap: {
//     hostname: "https://blog.prjedem.org",
//   },
//   locales: {
//     ...blogConfigBase.locales,
//     en: {
//       lang: "en-US",
//       ...makeCommonTheme(en, "en"),
//     },
//     ru: {
//       lang: "ru-RU",
//       ...makeCommonTheme(ru, "ru"),
//     },
//   },
//   themeConfig: blogConfigBase.themeConfig,
// };
