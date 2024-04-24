import commonParams from '../commonParams'


export default {
  label: 'Русский',
  title: 'Проект Эдем',
  description: 'Проект Эдем это анархисткая коммуна в Аргентине',
  //logo: '/logo.svg',
  themeConfig: {
    siteTitle: 'Проект Эдем',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchTitle: 'Переключиться на тёмную тему',
    lightModeSwitchTitle: 'Переключиться на светлую тему',
    authors: [
      { id: 'ivan-k', name: 'Айван Кей', link: 'https://t.me/ivan_k_8/16' },
    ],
    ui: {
      home: 'Главная',
      author: 'Автор',
      donateCall: 'Если вам нравится наш проект поддержите его пожалуйста финансово. [Пожертвовать](/ru/donate).',
      commentCall: 'Комментировать в Telegram канале',
      allTagsCall: 'Смотреть все тэги',
      postYoutubeButton: 'Смотреть видео',
      footer: {
        text: 'Копирование разрешено только со ссылкой на источник',
        copyright: 'Copyright © 2024-present Project Eden',
        links: [
          { text: 'О нас', href: 'https://prjedem.org/ru/about' },
        ],
      },
      topBar: {
        links: [
          { text: 'Донат', href: `${commonParams.siteUrl}/ru/donate`, icon: 'fa6-solid:heart'},
          { text: 'Сайт проекта', href: commonParams.siteUrl },
          { text: 'Мы в соц сетях', href: `${commonParams.siteUrl}/ru/links` },
          { text: 'О нас', href: `${commonParams.siteUrl}/ru/about` },
        ],
        socialLinks: [
          { href: 'https://github.com/bozonx/prjedem-blog', icon: 'fa6-brands:github-alt'},
        ],
        mobileLinks: [
          { text: 'Донат', href: `${commonParams.siteUrl}/ru/donate`, icon: 'fa6-solid:heart'},
        ],
      },
      sideBar: {
        topLinks: [
          { text: 'На главную', href: '/', icon: 'fa6-solid:house'},
          { text: 'По датам', href: '/recent', icon: 'fa6-solid:calendar-days'},
        ],
        bottomLinks: [
          { text: 'Донат', href: `${commonParams.siteUrl}/ru/donate`, icon: 'fa6-solid:heart', mobile: true},
          { text: 'Мы в соц сетях', href: `${commonParams.siteUrl}/ru/links`, mobile: true },
          { text: 'О нас', href: `${commonParams.siteUrl}/ru/about`, mobile: true },
          { header: 'Ссылки' },
          { text: 'Гид по проекту', href: 'https://prjedem.org/ru/guide', mobile: true },
          { text: 'Наш Youtube канал', href: 'https://www.youtube.com/@prjedem', icon: 'fa6-brands:youtube'},
          { text: 'Наш Telegram канал', href: 'https://t.me/prjedem', icon: 'fa6-brands:telegram'},
          { text: 'Наш чат в Telegram', href: 'https://t.me/prjedem_chat', icon: 'fa6-solid:message'},
        ],
      },
    },
  },

}
