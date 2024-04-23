import commonParams from '../commonParams'


export default {
  label: 'Русский',
  title: 'Проект Эдем',
  description: 'Проект Эдем это анархисткая коммуна в Аргентине',
  themeConfig: {
    siteTitle: 'Проект Эдем',
    returnToTopLabel: 'Наверх',
    sidebarmenulabel: 'Меню',
    darkModeSwitchTitle: 'Переключиться на тёмную тему',
    lightModeSwitchTitle: 'Переключиться на светлую тему',
    ui: {
      home: 'Главная',
      footer: {
        text: 'Копирование разрешено только со ссылкой на источник',
        copyright: 'Copyright © 2024-present Project Eden',
        links: [
          { text: 'О нас', href: '/ru/about' },
        ],
      },
      topBar: {
        links: [
          { text: 'Донат', href: '/ru/donate', icon: 'fa6-solid:heart'},
          { text: 'Гид по проекту', href: commonParams.siteUrl },
          { text: 'Мы в соц сетях', href: '/ru/links' },
          { text: 'О нас', href: '/ru/about' },
        ],
        socialLinks: [
          { href: 'https://github.com/bozonx/prjedem-blog', icon: 'fa6-brands:github-alt'},
        ],
        mobileLinks: [
          { text: 'Донат', href: '/ru/donate', icon: 'fa6-solid:heart'},
        ],
      },
      sideBar: {
        topLinks: [
          { text: 'На главную', href: '/ru/', icon: 'fa6-solid:house'},
          { text: 'По датам', href: '/ru/recent', icon: 'fa6-solid:calendar-days'},
        ],
        bottomLinks: [
          { text: 'Донат', href: '/ru/donate', icon: 'fa6-solid:heart', mobile: true},
          { text: 'Мы в соц сетях', href: '/ru/links', mobile: true },
          { text: 'О нас', href: '/ru/about', mobile: true },
          { header: 'Ссылки' },
          { text: 'Гид по проекту', href: '/ru/guide', mobile: true },
          { text: 'Наш Youtube канал', href: '/ru/donate', icon: 'fa6-brands:youtube'},
          { text: 'Наш Telegram канал', href: '/ru/donate', icon: 'fa6-brands:telegram'},
          { text: 'Наш чат в Telegram', href: '/ru/donate', icon: 'fa6-solid:message'},
        ],
      },
    },
  },

}
