<template>
  <el-input
    ref="input"
    v-bind="$attrs"
    :style="calcStyle"
    :class="[$attrs['show-word-limit'] && 'show-word-limit']"
    :clearable="shouldClearable"
    @change="handleChange"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
  </el-input>
</template>

<script>
const DefaultConfig = {
  width: undefined,
  trimBeforeChange: false
};

export default {
  name: 'AileInput',

  props: {
    clearable: {
      type: Boolean,
      default: undefined
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    mergeConfig() {
      return {
        ...DefaultConfig,
        ...this.$aileInput.config,
        ...this.config
      };
    },
    shouldClearable() {
      return typeof this.clearable === 'undefined'
        ? this.$aileInput.clearable
        : this.clearable;
    },
    calcStyle() {
      const style = {};
      if (this.mergeConfig.width) style.width = this.mergeConfig.width;
      return style;
    }
  },
  methods: {
    handleChange(val) {
      if (this.mergeConfig.trimBeforeChange) {
        val = val.trim();
        this.$emit('update:modelValue', val);
      }
      this.$emit('change', val);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
</script>

<style scoped>
.show-word-limit.el-textarea :deep(.el-input__count) {
  line-height: 14px;
}

.show-word-limit.el-input.el-input--suffix > :deep(.el-input__inner) {
  padding-right: 85px;
}

.show-word-limit.el-input > :deep(.el-input__inner) {
  padding-right: 65px;
}
</style>
