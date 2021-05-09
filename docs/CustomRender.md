---
title: 自定义渲染
---

[[toc]]

# 自定义渲染

## 节点的渲染

<RenderNode />

@[code](@components/RenderNode.vue)

节点的渲染通过 `<template v-slot:node="nodeSlotProps"></template>` 插槽来实现，`nodeSlotProps` 是一个对象，该对象具有如下属性：

- `node`：当前节点
- `expanded`：`true` 代表节点处于展开状态, `false` 代表节点处于收起状态。如果节点无子节点，那么其必为 `false`
- `parentNode`：当前节点的父节点。对于根节点来说，该属性为 `undefined`

DOM 结构如下所示：

```vue
<template>
  <!-- 它的宽高分别由 options.nodeWidth 和 options.nodeHeight 决定 -->
  <div class="tree-node-wrapper">
    <div class="tree-node-content">
      <slot name="node"></slot>
    </div>
  </div>
</template>

<style>
.tree-node-wrapper {
  position: absolute;
  cursor: auto;
}

.tree-node-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
```

## 连接线的渲染

<RenderLine />

@[code](@components/RenderLine.vue)

节点的渲染通过 `<template v-slot:line="lineSlotProps"></template>` 插槽来实现，`lineSlotProps` 是一个对象，该对象具有如下属性：

- `startNode`：连接线的起点节点
- `stopNode`：连接线的终点节点
- `containerWidth`：以连接线为对角线的矩形的宽度
- `containerHeight`：以连接线为对角线的矩形的高度
- `startPointCoordinate`：在以连接线为对角线的矩形所构成的坐标系内，起点的坐标
- `stopPointCoordinate`：在以连接线为对角线的矩形所构成的坐标系内，终点的坐标

DOM 结构如下所示：

```vue
<template>
  <!-- 它的宽高分别是 containerWidth 和 containerHeight -->
  <div class="tree-custom-line">
    <slot name="line"></slot>
  </div>
</template>

<style>
.tree-custom-line {
  position: absolute;
}
</style>
```
