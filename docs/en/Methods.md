---
title: Methods
---

[[toc]]

# Methods

## Demo

<Methods />

@[code](@components/Methods.vue)

---

- When searching for a node, `updateNodesExpanded` and `scrollIntoView` are called
- When changing a node, it will call `getExpandedKeys`, `updateNodesExpanded` or `toggleNodeExpanded`

## How to get method

Binding the component instance by `ref`, and then you can call the method on the instance.

```js
this.$refs.visTree.xxx();
```


## What methods can we use

| Name                  | Description                                                                                                                                                  | Type                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `scrollIntoView`      | Move the given node to the specified position in the canvas                                                                                                  | `({ key, top, left }) => void`                                          |
| `getExpandedKeys`     | Get the list of node identifiers of `expanded === true`, and use the `containInvisible` parameter to specify whether the list contains those invisible nodes | <code>(containInvisible?: boolean) => Array<string &#124 number></code> |
| `toggleNodeExpanded`  | Switch the `expanded` state of a node                                                                                                                        | <code>(key: string &#124 number) => void</code>                         |
| `updateNodesExpanded` | Batch update node's `expanded` status                                                                                                                        | `({ [identifier]: boolean }) => void`                                   |
