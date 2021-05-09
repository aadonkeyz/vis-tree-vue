const path = require('path');

module.exports = {
  title: '@vis-tree/vue',
  base: '/vis-tree-vue/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '@vis-tree/vue',
    },
    '/en/': {
      lang: 'en-US',
      title: '@vis-tree/vue'
    }
  },
  themeConfig: {
    home: '/Introduction.html',
    repo: 'bytedance/vis-tree',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '@vis-tree/vue',
        selectLanguageName: '中文',
        selectLanguageText: 'English',
        sidebar: [
          '/Introduction.md',
          '/QuickStart.md',
          '/CustomRender.md',
          '/Options.md',
          '/Methods.md',
          '/API.md',
        ]
      },
      '/en/': {
        lang: 'en-US',
        title: '@vis-tree/vue',
        selectLanguageName: 'English',
        selectLanguageText: '中文',
        sidebar: [
          '/en/Introduction.md',
          '/en/QuickStart.md',
          '/en/CustomRender.md',
          '/en/Options.md',
          '/en/Methods.md',
          '/en/API.md',
        ]
      }
    },
    editLink: false,
    notFound: ['路径出问题了（Looks like we have got some broken links）'],
    backToHome: '回首页（Back to home）',
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@components/, path.resolve(__dirname, './components')),
    },
  },
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
  bundlerConfig: {
    configureWebpack() {
      return {
        resolve: {
          symlinks: false,
          alias: {
            vue: path.resolve('./node_modules/vue'),
          },
        },
      }
    },
  }
}