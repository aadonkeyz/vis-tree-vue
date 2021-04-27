import { defineClientAppEnhance } from '@vuepress/client'
import DynamicDataSource from './components/DynamicDataSource.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('DynamicDataSource', DynamicDataSource);
})