<template>
  <div class="container">
    <div class="search">
      search:
      <el-cascader
        placeholder="请输入想要搜索的地区名称"
        :style="{ width: '250px' }"
        :props="{ checkStrictly: true, expandTrigger: 'hover', value: 'id', label: 'name' }"
        :options="dataSource.children"
        filterable
        @change="handleSearch"
      />
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
      class="vis-tree"
      ref="visTree"
      :data-source="dataSource"
      :scale-ratio="scaleRatio"
      :options="options"
    >
      <template v-slot:node="nodeSlotProps">
        <div class="node-container">
          <div class="node-content">
            {{nodeSlotProps.node.name}}
          </div>

          <i
            v-if="nodeSlotProps.node.children && nodeSlotProps.node.children.length > 0"
            class="node-switcher"
            :class="nodeSlotProps.expanded ? 'el-icon-circle-plus-outline' : 'el-icon-remove-outline'"
            :style="{ color: `${nodeSlotProps.expanded ? 'green' : 'red'}` }"
            @click="() => toggleNodeExpanded(nodeSlotProps.expanded, nodeSlotProps.node, nodeSlotProps.parentNode)"
          />
        </div>
      </template>
    </vis-tree>
  </div>
</template>

<script>
import VisTree, { LAYOUT_STRATEGY } from '@vis-tree/vue';
import ElCascader from 'element-plus/lib/el-cascader';
import 'element-plus/lib/theme-chalk/index.css';

import dataSource from "./districts.json";

export default {
  props: {
    msg: String,
  },
  components: {
    VisTree,
    ElCascader,
  },
  data() {
    return {
      scaleRatio: 1,
      dataSource,
      options: {
          defaultScrollInfo: {
            key: dataSource.id,
            top: 80,
            left: "20%",
          },
          nodeWidth: 120,
          customKeyField: "id",
          layoutStrategy: LAYOUT_STRATEGY.TOP_LEFT_ALIGN_TOP,
      }
    };
  },
  methods: {
    toggleNodeExpanded(expanded, node, parentNode) {
      const visibleExpandedKeys = this.$refs.visTree.getExpandedKeys();
      const sameLevelKeys = visibleExpandedKeys.filter(
        (item) =>
          parentNode &&
          parentNode.children.find((subNode) => subNode.id === item)
      );

      if (sameLevelKeys.length > 0 && !expanded) {
        this.$refs.visTree.updateNodesExpanded(
          sameLevelKeys.reduce(
            (pre, cur) => {
              return {
                ...pre,
                [cur]: cur === node.id,
              };
            },
            { [node.id]: true }
          )
        );
      } else {
        this.$refs.visTree.toggleNodeExpanded(node.id);
      }
    },

    handleSearch(list) {
    if (list.length > 0) {
      const shouldExpandKeys = list.slice();
      const lastId = shouldExpandKeys.pop();
      const visibleExpandedKeys = this.$refs.visTree.getExpandedKeys();
      const nodeExpandedMap = shouldExpandKeys.reduce(
        (pre, cur) => ({ ...pre, [cur]: true }),
        visibleExpandedKeys.reduce(
          (pre, cur) => ({ ...pre, [cur]: cur === dataSource.id }),
          {}
        )
      );

      this.$refs.visTree.updateNodesExpanded(nodeExpandedMap);
      this.$refs.visTree.scrollIntoView({
        key: lastId,
      });
    }
    }
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
.search {
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
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background: #fff;
}
</style>