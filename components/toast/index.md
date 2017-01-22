---
category: Components
type: Feedback
chinese: 轻提示
english: Toast
source: design
---

一种轻量级反馈/提示，可以用来显示不会打断用户操作行为，适合于页面跳转，数据交互等场景中。

### 规则
- 一次只显示一个 Toast；
- 有 Icon 的 Toast, 字数应为 4-6 个，没有 Icon 的 Toast 字数不宜超过 14 个；


## API ( 适用平台：WEB )

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | Toast类型，可选值为`success`/`error`/`warning` 或者不设     |   string   |   -  |
| message       | 设置提示信息 | string | - |
| position  | 提示位置 可选值为 `bottom`/`center`/`top`|  | - |
