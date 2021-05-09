<template>
  <div class="container">
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
            {{nodeSlotProps.node.key}}
          </div>

          <div class="node-dynamic-btns">
            <i
              v-if="nodeSlotProps.parentNode"
              class="delete-btn el-icon-delete"
              @click="() => handleDelete(nodeSlotProps.parentNode, nodeSlotProps.node.key)"
            />
            <i
              class="add-btn el-icon-plus"
              @click="() => handleAdd(nodeSlotProps.node, nodeSlotProps.expanded)"
            />
          </div>

          <i
            v-if="nodeSlotProps.node.children && nodeSlotProps.node.children.length > 0"
            class="node-switcher"
            :class="nodeSlotProps.expanded ? 'el-icon-circle-plus-outline' : 'el-icon-remove-outline'"
            :style="{ color: `${nodeSlotProps.expanded ? 'green' : 'red'}` }"
            @click="() => toggleNodeExpanded(nodeSlotProps.node.key)"
          />
        </div>
      </template>
    </vis-tree>
  </div>
</template>

<script>
import VisTree from '@vis-tree/vue';
import 'element-plus/lib/theme-chalk/index.css';

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
      },
      count: 1,
      shouldExpandNodeKey: undefined
    };
  },
  updated() {
    if (this.shouldExpandNodeKey) {
      this.$refs.visTree.toggleNodeExpanded(this.shouldExpandNodeKey);
      this.shouldExpandNodeKey = undefined;
    }
  },
  methods: {
    toggleNodeExpanded(key) {
      this.$refs.visTree.toggleNodeExpanded(key);
    },

    handleDelete(parentNode, deleteKey) {
      parentNode.children = parentNode.children.filter(
        (item) => item.key !== deleteKey
      );
      this.dataSource = { ...this.dataSource };
    },
    
    handleAdd(node, expanded) {
      if (node.children) {
        node.children.push({ key: this.count });
      } else {
        node.children = [{ key: this.count }];
      }
      this.count += 1;
      if (!expanded) {
        this.shouldExpandNodeKey = node.key;
      }
      this.dataSource = { ...this.dataSource };
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
  margin-top: 3px;
  text-align: center;
}
.node-dynamic-btns {
  display: flex;
  justify-content: space-around;
}
.delete-btn {
  color: #ff4d4f
}
.add-btn {
  color: #1890ff
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