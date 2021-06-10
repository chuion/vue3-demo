<template>
  <el-dialog
    v-bind="$attrs"
    :title="title"
    :custom-class="calcCustomClass"
    :append-to-body="calcAppendToBody"
    :close-on-click-modal="calcCloseOnClickModal"
    :close-on-press-escape="calcCloseOnPressEscape"
    :width="width"
    @closed="handleClosed"
  >
    <template #title>
      <slot name="title" />
    </template>
    <slot />
    <template v-if="!mergeConfig.hideFooter" #footer>
      <div
        class="aile-dialog__footer"
        :class="[`is-align-${mergeConfig.footerAlign}`]"
      >
        <slot name="footer">
          <el-button
            v-if="mergeConfig.showConfirm"
            :type="mergeConfig.confirmType"
            size="small"
            :loading="mergeConfig.confirmLoading"
            :disabled="mergeConfig.confirmDisabled"
            @click="$emit('confirm')"
          >
            {{ mergeConfig.confirmText }}
          </el-button>
          <el-button
            v-if="mergeConfig.showCancel"
            :type="mergeConfig.cancelType"
            size="small"
            @click="handleCancel"
          >
            {{ mergeConfig.cancelText }}
          </el-button>
        </slot>
      </div>
    </template>
  </el-dialog>
</template>

<script>
// AileDialog的默认参数，可通过传入props.config进行覆盖
const DefaultConfig = {
  // 是否显示【确定】按钮
  showConfirm: false,

  // 【确定】按钮文字内容
  confirmText: "确定",

  // 【确定】按钮加载状态
  confirmLoading: false,

  // 【确定】按钮禁用状态
  confirmDisabled: false,

  // 是否展示【关闭】按钮
  showCancel: true,

  // 【关闭】按钮文字内容
  cancelText: "关闭",

  // 是否隐藏底部按钮区域
  hideFooter: false,

  // 底部按钮区域对齐方式
  footerAlign: "right",

  confirmType: "primary",

  cancelType: "info",
};

export default {
  name: "AileDialog",

  inheritAttrs: false,
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    appendToBody: {
      type: Boolean,
      default: undefined,
    },
    modalAppendToBody: {
      type: Boolean,
      default: undefined,
    },
    closeOnClickModal: {
      type: Boolean,
      default: undefined,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: undefined,
    },
    width: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: "",
    },
    class: {
      type: [String, Array, Object],
      default: "",
    },
  },
  emits: ["cancel", "confirm", "update:modelValue", "closed"],
  computed: {
    mergeConfig() {
      return {
        ...DefaultConfig,
        ...this.$aileDialog.config,
        ...this.config,
      };
    },
    calcWidth() {
      if (this.width !== undefined) {
        return this.width;
      }
      return this.$aileDialog.width;
    },
    calcAppendToBody() {
      if (this.appendToBody !== undefined) {
        return this.appendToBody;
      }
      return this.$aileDialog.appendToBody;
    },
    calcCloseOnClickModal() {
      if (this.closeOnClickModal !== undefined) {
        return this.closeOnClickModal;
      }
      return this.$aileDialog.closeOnClickModal;
    },
    calcCloseOnPressEscape() {
      if (this.closeOnPressEscape !== undefined) {
        return this.closeOnPressEscape;
      }
      return this.$aileDialog.closeOnPressEscape;
    },
    calcCustomClass() {
      let res = [
        "aile-dialog",
        this.mergeConfig.hideFooter && "is-hide-footer",
      ];
      if (typeof this.class === "string") {
        res = res.concat(this.class.split(" "));
      } else if (Array.isArray(this.class)) {
        res = res.concat(this.class);
      } else if (typeof this.class === "object") {
        res = res.concat(
          Object.keys(this.class).filter((key) => !!this.class[key])
        );
      }
      return res.filter((item) => !!item).join(" ");
    },
  },
  methods: {
    async handleCancel() {
      if (this.$attrs.onCancel) {
        await this.$emit("cancel");
      } else {
        this.$emit("update:modelValue", false);
      }
    },
    handleClosed() {
      this.$emit("update:modelValue", false);
      if (this.$attrs.onClosed) {
        this.$emit("closed");
      }
    },
  },
};
</script>

<style scoped>
.aile-dialog :deep(.el-dialog__body) {
  padding: 20px 20px 0;
}

.aile-dialog.is-hide-footer :deep(.el-dialog__body) {
  padding: 20px;
}

.aile-dialog__footer {
  width: 100%;
  display: flex;
}

.aile-dialog__footer.is-align-right {
  justify-content: flex-end;
}

.aile-dialog__footer.is-align-center {
  justify-content: center;
}

.aile-dialog__footer.is-align-left {
  justify-content: flex-start;
}
</style>
