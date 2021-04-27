const path = require('path');

module.exports = {
  title: '@vis-tree/vue',
  base: '/vis-tree-vue/',
  locales: {
    '/': {
      lang: 'zh-CN',
      selectLanguageName: '中文',
      title: '@vis-tree/vue',
    },
    '/en/': {
      lang: 'en-US',
      selectLanguageName: '英文',
      title: '@vis-tree/vue'
    }
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