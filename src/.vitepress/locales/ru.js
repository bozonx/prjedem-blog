import commonParams from '../commonParams'


export default {
  label: 'Русский',
  title: 'Проект Эдем',
  description: 'Проект Эдем это анархисткая коммуна в Аргентине',
  themeConfig: {
    siteTitle: 'Проект Эдем',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchTitle: 'Переключиться на тёмную тему',
    lightModeSwitchTitle: 'Переключиться на светлую тему',
    outline: {
      label: 'На этой странице',
    },
    footer: {
      message: 'Копирование разрешено только со ссылкой на источник',
      copyright: 'Copyright © 2024-present Project Eden'
    },
    lastUpdated: {
      text: 'Последнее обновление',
      ...commonParams.lastUpdated,
    },
    nav: [
      { text: 'Донат', link: '/ru/donate' },
      { text: 'Блог', link: commonParams.siteUrl },
      { text: 'Мы в соц сетях', link: '/ru/links' },
      { text: 'О нас', link: '/ru/about' },
    ],
    sidebar: [
      {
        text: 'Блог',
        items: [
          { text: 'Тэги', link: '/ru/alltags' },
        ]
      },
    ],
    ui: {
      home: 'Главная',
      //donate: 'Донат',
      toTheTop: 'Наверх',
      footer: {
        text: 'Копирование разрешено только со ссылкой на источник',
        copyright: 'Copyright © 2024-present Project Eden',
        links: [
          { text: 'О нас', href: '/ru/about' },
        ],
      },
      topBar: {
        links: [
          { text: 'Гид по проекту', href: '/ru/guide' },
        ],
        socialLinks: [
          { href: '/ru/donate', icon: 'fa6-brands:github-alt'},
        ],
        specialLinks: [
          { text: 'Донат', href: '/ru/donate', icon: 'fa6-solid:heart'},
        ],
      },
      sideBar: {
        topLinks: [
          { text: 'На главную', href: '/ru/', icon: 'fa6-solid:house-chimney'},
        ],
        bottomLinks: [
          { header: 'Ссылки' },
          { text: 'Наш Telegram канал', href: '/ru/donate', icon: 'fa6-solid:heart'},
          { text: 'Донат', href: '/ru/donate', icon: 'fa6-solid:heart'},
        ],
        mobileFooter: [
          { text: 'Гид по проекту', href: '/ru/guide' },
        ],
      },
    },
  },

}
