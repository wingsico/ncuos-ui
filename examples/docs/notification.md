## Notification 通知
---
### 概述
暂无

### 基本用法

<div class="demo-display">
  <div class="layout">
  <!-- 外面两层 demo-display 和 layout 记得加上 -->
    <us-button @click="$notify({title: 'TEST', type: 'error', message: 'Test successfully.', duration: 0})">test</us-button>
  </div>
  <div class="code-display">

:::demo
```html
<us-button @click="$notify({title: 'TEST', message: 'Test successfully.', duration: 0})">test</us-button>
```
:::
  </div>
</div>