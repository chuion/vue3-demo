## aile-ui/tooltip

### Intro 简介

`aile-ui/tooltip` 是一款Tooltip组件，基于 `vue` 和 `element-ui` 进行的二次封装
- 可以根据需要配置皮肤、设置最大宽度。
- 通过 `theme.js` 来实现`Tooltip`皮肤的配置;
- 采用 `$attrs` 和 `$listeners` 接收参数和监听事件，无缝对接 `element-ui` 中的 `Tooltip` 文档板块；

### Install 安装

通过 `npm` 或者 `yarn` 安装项目

```bash
npm i aile-ui

# 或者
yarn add aile-ui
```

### Options 配置项

#### 全局配置项

配置项内容可在全局引入时设置，或者直接使用 `<aile-tooltip {...options} />` ，需注意：直接使用的优先级高于全局配置
`<el-tooltip>` 支持的所有属性（attributes)均可在 `main.js` 中安装组件时进行统一配置，可单独配置config属性，设置主题样式

|    参数    | 数据类型 | 默认值 | 可选值 |                      说明                       |
| :--------: | :------: | :----: | :----: | :---------------------------------------------: |
| **themes** |  Array   |   -    |   —    | 预设主题，数组由[主题对象](#theme-主题配置)构成 |
| **attrs**  |  Object  |   -    |   —    |    全局属性配置，支持 `ElTooltip` 的所有属性    |

### Theme 主题对象配置

| 参数  | 数据类型 |  默认值   | 可选值 |                               说明                                |
| :---: | :------: | :-------: | :----: | :---------------------------------------------------------------: |
| name  |  string  | undefined |   —    |                    主题名称，通过`effect`调用                     |
| style |  object  | undefined |   —    | 主题样式，将作为行内样式绑定（支持所有的CSS属性，使用小驼峰命名） |

### Attributes/Props 属性

**支持 `ElementPlus` 中 [Tooltip](https://element-plus.org/#/zh-CN/component/tooltip) 的所有属性：`effect` / `content` / `placement` / `model-value / v-model` / `disabled` / `offset` / `transition` 等**

### Quick Start 快速开始

注意：由于 `AilePlus` 是基于 `ElementPlus` 进行的二次开发，因此需全局引入 `ElementPlus` 组件后方可正常使用

- 引入模块并初始化配置

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(ElementPlus)

// 全量引入
import AilePlus from 'aile-plus'
app.use(AilePlus, {
  tooltip: {
    attrs: {
      placement: 'top', 
      showAfter: 1000, 
      effect: 'kitty',
    }
    themes: [
      {
        name: 'kitty',
        style: {
          padding: '5px',
          background: '#eee',
          borderColor: 'red',
          color: 'skyblue',
          fontSize: '14px'
        }
      }
    ]
  }
})

// or 按需引入
import AileTooltip from 'aile-plus/lib/tooltip'
app.use(AileTooltip, {
  attrs: {
    placement: 'top', 
    showAfter: 1000, 
    effect: 'kitty',
  }
  themes: [
    {
      name: 'kitty',
      style: {
        padding: '5px',
        background: '#eee',
        borderColor: 'red',
        color: 'skyblue',
        fontSize: '14px'
      }
    }
  ]
})

```

- 标准使用方式

```ts
/**
 * template使用示例
*/
<aile-tooltip
  content="皮肤名为kitty，在theme.js中进行配置"
  max-width="100px"
  effect="kitty"
>
  <el-button
    type="primary"
    size="medium"
  >
    AileTooltip
  </el-button>
</aile-tooltip>

```
