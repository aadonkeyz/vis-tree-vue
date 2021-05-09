import { defineClientAppEnhance } from '@vuepress/client'
import Display from './components/Display.vue'
import DynamicDataSource from './components/DynamicDataSource.vue'
import Interactive from './components/Interactive.vue'
import Methods from './components/Methods.vue'
import Options from './components/Options.vue'
import RenderLine from './components/RenderLine.vue'
import RenderNode from './components/RenderNode.vue'
import Scalable from './components/Scalable.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('Display', Display);
  app.component('DynamicDataSource', DynamicDataSource);
  app.component('Interactive', Interactive);
  app.component('Methods', Methods);
  app.component('Options', Options);
  app.component('RenderLine', RenderLine);
  app.component('RenderNode', RenderNode);
  app.component('Scalable', Scalable);
})