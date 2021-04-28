<template>
  <div class="container">
    <vis-tree
      class="vis-tree"
      :data-source="dataSource"
      :options="options"
    >
      <template v-slot:node="nodeSlotProps">
        <div class="node-container">
          <div class="node-content">
            {{nodeSlotProps.node.key}}
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
      dataSource: originDataSource,
      options: {
          defaultScrollInfo: {
            key: originDataSource.key,
            top: 20,
          },
          defaultExpandAll: true,
      }
    };
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
</style>