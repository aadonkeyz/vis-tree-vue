---
title: Custom rendering
---

[[toc]]

# Custom rendering

## Node rendering

<RenderNode />

@[code](@components/RenderNode.vue)

The rendering of the node is achieved by `<template v-slot:node="nodeSlotProps"></template>`，`nodeSlotProps` is an object，which has the following properties:

- `node`: Current node
- `expanded`: `true` means the node is in the expanded state, `false` means the node is in the collapsed state. If the node has no children, then it must be `false`
- `parentNode`: The parent node of the current node. For the root node, this attribute is `undefined`

The DOM structure is as follows:

```vue
<template>
  <!-- Its width and height are determined by options.nodeWidth and options.nodeHeight respectively -->
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

## Rendering of connecting lines

<RenderLine />

@[code](@components/RenderLine.vue)

The rendering of the line is achieved by `<template v-slot:line="lineSlotProps"></template>` ，`lineSlotProps` is an object，which has the following properties:

- `startNode`: Start node of the connecting line
- `stopNode`: End node of the connecting line
- `containerWidth`: The width of the rectangle with the connecting line as the diagonal
- `containerHeight`: The height of the rectangle with the connecting line as the diagonal
- `startPointCoordinate`: In the coordinate system formed by the rectangle with the connecting line as the diagonal, the coordinates of the starting point
- `stopPointCoordinate`: In the coordinate system formed by the rectangle with the connecting line as the diagonal, the coordinates of the end point

The DOM structure is as follows:

```vue
<template>
  <!-- Its width and height are containerWidth and containerHeight respectively -->
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
