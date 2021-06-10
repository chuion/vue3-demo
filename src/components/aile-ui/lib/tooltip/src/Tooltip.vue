<template>
  <el-tooltip
    ref="aileTooltip"
    v-bind="mergeProps"
    class="aile-tooltip"
    :popper-class="calcPopperClass"
  >
    <template #content>
      <slot name="content" />
    </template>
    <slot />
  </el-tooltip>
</template>

<script>
import { checkType } from '../../../utils/index.js';

const DefaultProps = {
  placement: 'bottom',
  showAfter: 0
}

export default {
  name: 'AileTooltip',

  inheritAttrs: false,
  props: {
    popperClass: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    mergeProps() {
      return {
        ...DefaultProps, // 默认属性
        ...this.$aileTooltip.attrs, // 全局属性
        ...this.$attrs // 组件属性
      }
    },
    calcPopperClass() {
      const classList = ['aile-tooltip__popper']
      switch (checkType(this.popperClass)) {
        case 'string':
          classList.push(this.popperClass)
          break;
        case 'array':
          classList.push(...this.popperClass)
          break;
        case 'object':
          Object.keys(this.popperClass).forEach(key => {
            if (!!this.popperClass[key]) {
              classList.push(key)
            }
          })
          break;
        default:
      }
      return classList.filter(item => !!item).join(' ')
    }
  }
};
</script>
