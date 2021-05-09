<template>
  <div class="container">
    <div class="layout-strategy">
      layoutStrategy:
      <el-select v-model="layoutStrategy" :style="{ width: '250px' }">
        <el-option
          v-for="item in Object.keys(LAYOUT_STRATEGY)"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
    <input
      class="scale-handler"
      type="range"
      :min="0.1"
      :max="2"
      :step="0.01"
      v-model="scaleRatio"
    />
    <vis-tree
      :key="layoutStrategy"
      class="vis-tree"
      ref="visTree"
      :data-source="dataSource"
      :scale-ratio="scaleRatio"
      :options="{ ...options, layoutStrategy }"
    >
      <template v-slot:node="nodeSlotProps">
        <div class="node-container">
          <div class="node-content">
            {{nodeSlotProps.node.id}}
          </div>

          <i
            v-if="nodeSlotProps.node.items && nodeSlotProps.node.items.length > 0"
            class="node-switcher"
            :class="nodeSlotProps.expanded ? 'el-icon-circle-plus-outline' : 'el-icon-remove-outline'"
            :style="{ color: `${nodeSlotProps.expanded ? 'green' : 'red'}` }"
            @click="() => toggleNodeExpanded(nodeSlotProps.node.id)"
          />
        </div>
      </template>
    </vis-tree>
  </div>
</template>

<script>
import VisTree, { LAYOUT_STRATEGY } from '@vis-tree/vue';
import ElSelect from 'element-plus/lib/el-select';
import ElOption from 'element-plus/lib/el-option';
import 'element-plus/lib/theme-chalk/index.css';

const originDataSource = {
  id: "O",
  items: [
    {
      id: "E",
      items: [
        {
          id: "A",
        },
        {
          id: "D",
          items: [
            {
              id: "B",
            },
            {
              id: "C",
            },
          ],
        },
      ],
    },
    {
      id: "F",
    },
    {
      id: "N",
      items: [
        {
          id: "G",
        },
        {
          id: "M",
          items: [
            {
              id: "H",
            },
            {
              id: "I",
            },
            {
              id: "J",
            },
            {
              id: "K",
            },
            {
              id: "L",
            },
          ],
        },
      ],
    },
  ],
};

export default {
  props: {
    msg: String,
  },
  components: {
    VisTree,
    ElSelect,
    ElOption
  },
  data() {
    return {
      LAYOUT_STRATEGY,
      layoutStrategy: LAYOUT_STRATEGY.TOP_CENTER,
      scaleRatio: 1,
      dataSource: originDataSource,
      options: {
        defaultScrollInfo: {
          key: originDataSource.id,
        },
        defaultExpandAll: true,
        customKeyField: "id",
        customChildrenField: "items",
        nodeWidth: 60,
        nodeHeight: 40,
        siblingInterval: 20,
        levelInterval: 20,
      }
    };
  },
  methods: {
    toggleNodeExpanded(key) {
      this.$refs.visTree.toggleNodeExpanded(key);
    },
  }
};
</script>

<style scoped>
.container {
  position: relative;
  background-color: #fff;
  border: 1px solid #ebedf1;
  border-radius: 1px;
}
.layout-strategy {
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  z-index: 1;
  background: #f2f5fa;
}
.scale-handler {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}
.vis-tree {
  width: 100%;
  height: 400px;
}
.node-container {
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid black;
}
.node-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.node-switcher {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background: #fff;
}
</style>