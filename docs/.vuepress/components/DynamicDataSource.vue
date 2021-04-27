<template>
  <div class="container">
    <input
      class="scale-handler"
      type="range"
      :min="0.1"
      :max="2"
      :step="0.01"
      :value="scaleRatio"
      :onChange="handleScaleRatioChange"
    />
    <vis-tree
      class="vis-tree"
      ref="visTree"
      :data-source="dataSource"
      :options="options"
    >
      <template v-slot:node="nodeSlotProps">
        <div class="node-container">
          <div class="node-content">
            {{nodeSlotProps.node.key}}
          </div>
          <div
            class="node-switcher"
            v-if="nodeSlotProps.node.children && nodeSlotProps.node.children.length > 0"
            :style="{ color: `${nodeSlotProps.expanded ? 'green' : 'red'}` }"
            @click="() => toggleNodeExpanded(nodeSlotProps.node.key)"
          >
            <i :class="nodeSlotProps.expanded ? 'el-icon-circle-plus-outline' : 'el-icon-remove-outline'" :style="{ display: 'block' }" />
          </div>
        </div>
      </template>
    </vis-tree>
  </div>
</template>

<script>
import VisTree from '@vis-tree/vue';

const originDataSource = {
  key: 'O',
  children: [
    {
      key: 'E',
      children: [
        {
          key: 'A',
        },
        {
          key: 'D',
          children: [
            {
              key: 'B',
            },
            {
              key: 'C',
            },
          ],
        },
      ],
    },
    {
      key: 'F',
    },
    {
      key: 'N',
      children: [
        {
          key: 'G',
        },
        {
          key: 'M',
          children: [
            {
              key: 'H',
            },
            {
              key: 'I',
            },
            {
              key: 'J',
            },
            {
              key: 'K',
            },
            {
              key: 'L',
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
  },
  data() {
    return {
      dynamicComponent: null,
      scaleRatio: 1,
      dataSource: originDataSource,
      options: {
          defaultScrollInfo: {
            key: originDataSource.key,
            top: 20,
          },
          defaultExpandAll: true,
          nodeWidth: 100,
          nodeHeight: 50,
      }
    };
  },
  methods: {
    handleScaleRatioChange(e) {
      this.scaleRatio = e.target.value;
    },

    toggleNodeExpanded(key) {
      this.$refs.visTree.toggleNodeExpanded(key);
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
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background: #fff;
}
</style>