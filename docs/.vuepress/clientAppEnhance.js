import { defineClientAppEnhance } from '@vuepress/client'
import Display from './components/Display.vue'
import DynamicDataSource from './components/DynamicDataSource.vue'
import Interactive from './components/Interactive.vue'
import Scalable from './components/Scalable.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Display', Display);
  app.component('DynamicDataSource', DynamicDataSource);
  app.component('Interactive', Interactive);
  app.component('Scalable', Scalable);
})