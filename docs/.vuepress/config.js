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
    selectLanguageText: '选择语言（Languages）',
    locales: {
      '/': {
        selectLanguageName: '中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      }
    },
    editLink: false,
    notFound: ['路径出问题了（Looks like we have got some broken links）'],
    backToHome: '回首页（Back to home）'
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