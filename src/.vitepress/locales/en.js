import commonParams from '../commonParams'


export default {
  label: 'English',
  themeConfig: {
    siteTitle: 'Project Eden',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchTitle: 'Switch to dark theme',
    lightModeSwitchTitle: 'Switch to light theme',
    outline: {
      label: 'On this page',
    },
    footer: {
      message: 'Copy is allowed only with source link',
      copyright: 'Copyright © 2024-present Project Eden'
    },
    lastUpdated: {
      text: 'Updated at',
      ...commonParams.lastUpdated,
    },
    nav: [
      { text: 'Donate', link: '/en/pages/donate' },
      { text: 'Blog', link: commonParams.siteUrl },
      { text: 'Our social media', link: '/en/links' },
      { text: 'About', link: '/en/about' },
    ],
    sidebar: [
      {
        //text: 'Guide',
        items: [
          { text: 'Introduction', link: '/en/guide/intro' },
          { text: 'Economics', link: '/en/guide/economics' },
        ]
      },
    ],
  },


}
