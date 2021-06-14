# aile-plus/placement

## Intro 简介

`aile-plus/placement` 是一款占位组件，基于 `Vue3` ，无需繁琐的代码，方便需要占位的地方显示 init 状态和 empty 状态。

- 通过 `empty` 属性来实现占位组件的显隐，通过 `loading` 属性可以激活 init 状态，最后组件可以进行“自销毁操作”，无需调用者手动控制。

## Install 安装

- 通过 `npm` 或者 `yarn` 安装项目

```bash
npm i aile-plus
# 或者
yarn add aile-plus
```

## Options 配置项

配置项内容可在全局引入时设置，或者直接使用 `<aile-placement {...options} />` ，需注意：直接使用的优先级高于全局配置

|    参数    | 数据类型 |                说明                 |
| :--------: | :------: | :---------------------------------: |
| **config** |  Object  | 支持全局设置 AileSelect config 属性 |

## Attributes/Props 属性

|    参数    | 数据类型 |                          说明                          |
| :--------: | :------: | :----------------------------------------------------: |
| **config** |  Object  |          支持全局设置 AileSelect config 属性           |
|   empty    | Boolean  |                  是否为空，该参数必传                  |
|  loading   | Boolean  | 是否加载中（配置了此参数时，组件初始将呈现 init 状态） |
|   width    |  String  |                        组件宽度                        |
|   height   |  String  |                        组件高度                        |

### Config 配置项

|     参数      | 数据类型 |   默认值   |       说明       |
| :-----------: | :------: | :--------: | :--------------: |
|   initText    |  String  | '初始化中' | 初始化显示的文字 |
| initImageSrc  |  String  |     -      | 初始化显示的图片 |
|   emptyText   |  String  | '暂无数据' | 无数据显示的文字 |
| emptyImageSrc |  String  |     -      | 无数据显示的图片 |
|  imageWidth   |  String  |   '80px'   |     图片宽度     |
|  imageHeight  |  String  |   '80px'   |     图片高度     |
|     width     |  String  |   '100%'   |     组件宽度     |
|    height     |  String  |   '100%'   |     组件高度     |

## Slot 插槽

| name  |      说明      |
| :---: | :------------: |
| init  | 初始化显示内容 |
| empty | 无数据显示内容 |

## Quick Start 快速开始

注意：由于 `AilePlus` 是基于 `ElementPlus` 进行的二次开发，因此需全局引入 ElementPlus 组件后方可正常使用

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
  placement: {
    emptySrc: require('@/assets/images/empty.svg'), // 空白占位图，使用require引入静态目录下的图片，或使用网络图片
  },
});

// or 按需引入
import AilePlacement from 'aile-plus/lib/placement';
app.use(AilePlacement, {
  emptySrc: require('@/assets/images/empty.svg'), // 空白占位图，使用require引入静态目录下的图片，或使用网络图片
});
```

- 标准使用方式

```javascript

/**
 * template使用示例
*/
<aile-placement
  :loading="loading"
  :empty="!list.length"
  :config="{
    emptyText: "暂无分析结果"
    initText: "初始化中"
    initImageSrc: require('@/assets/images/init.png')
  }"
/>

```
