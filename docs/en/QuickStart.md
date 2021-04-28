---
title: Quick start
---

# Quick start

## Pure display

- Set the initial position of the root node of the tree in the canvas by `options.defaultScrollInfo`
- Expand all nodes by default through `options.defaultExpandAll`
- Render nodes through `renderNode()`

<Display />

## Interactive

- Judge the state of the node (expanded/collapsed) by the value of `expanded` in `renderNode({ node, expanded, parentNode })`
- By binding `ref` on `<vis-tree />`, get the method of the component instance, here use the `toggleNodeExpanded()` method to switch the state of a node

<Interactive />

## Scalable

Control the zoom of the canvas through `scaleRatio`

<Scalable />

## Dynamically change the data source

Refresh the tree by changing `dataSource`, the position of the root node relative to the canvas remains unchanged before and after refresh

<DynamicDataSource />
