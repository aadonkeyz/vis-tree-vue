---
title: 快速开始
---

[[toc]]

# 快速开始

## 纯展示

- 通过 `options.defaultScrollInfo` 来设置树的根节点在画布中的初始位置
- 通过 `options.defaultExpandAll` 来默认展开所有节点
- 通过 `renderNode()` 来渲染节点

<Display />

@[code](@components/Display.vue)

## 可交互

- 通过 `renderNode({ node, expanded, parentNode })` 中的 `expanded` 的值来判断节点的状态（展开/收起）
- 通过在 `<vis-tree />` 上绑定 `ref`，获得组件实例上的方法，此处使用 `toggleNodeExpanded()` 方法来切换一个节点的状态

<Interactive />

@[code](@components/Interactive.vue)

## 可缩放

通过 `scaleRatio` 控制画布的缩放

<Scalable />

@[code](@components/Scalable.vue)

## 动态改变数据源

通过改变 `dataSource` 来刷新树，刷新前后根节点相对画布的位置不变

<DynamicDataSource />

@[code](@components/DynamicDataSource.vue)
