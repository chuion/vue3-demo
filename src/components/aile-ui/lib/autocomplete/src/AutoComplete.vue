<template>
  <div class="aile-autocomplete" v-scroll="handleLoadMore">
    <el-autocomplete
      ref="autocomplete"
      v-bind="$attrs"
      :fetch-suggestions="handleFetchSuggestions"
      :value-key="valueKey"
      :style="calcStyle"
      :clearable="calcClearable"
      @clear="handleClear"
      @select="handleSelect"
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
      <template #default="{ item }">
        <slot :item="item" />
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
const DefaultConfig = {
  width: undefined,
  trimBeforeChange: false,

  dataSource: [],
  // queryKey String 远程请求的动态字段名称
  queryKey: "",
  // requestParams Object 远程请求的静态参数
  requestParams: {},
  // scrollable Boolean 是否开启滚动加载
  scrollable: false,
  // remote Boolean 是否开启远程搜索 默认 false
  remote: false,
  // remoteMethod Function 远程搜索API
  remoteMethod: null,
  // pageField String 分页页码参数
  pageField: "page_index",
  // sizeField String 页容量参数
  sizeField: "page_size",
  // pageSize Number 分页每页显示条目个
  pageSize: 20,
  respDataField: "data",
  respTotalField: "total",
  // respFormatter Function 请求成功后事件回调
  respFormatter: (res) => res,
};

export default {
  name: "AileAutocomplete",
  inheritAttrs: false,
  directives: {
    scroll: {
      mounted(el, binding) {
        const child = el.querySelector('.el-autocomplete');
        const id = child.getAttribute('ariadescribedby');
        const poper = document.getElementById(id);
        const SELECTDOWN_DOM = poper.querySelector('.el-autocomplete-suggestion .el-autocomplete-suggestion__wrap');
        // 这里不能使用箭头函数！
        SELECTDOWN_DOM.addEventListener('scroll', function () {
          /**
           * scrollHeight 获取元素内容高度(只读)
           * scrollTop 获取或者设置元素的偏移值,
           *  常用于:计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
           * clientHeight 读取元素的可见高度(只读)
           * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
           * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
           */
          const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight;
          if (CONDITION) {
            binding.value();
          }
        })
      }
    },
  },
  props: {
    valueKey: {
      type: String,
      default: "value",
    },
    clearable: {
      type: Boolean,
      default: undefined,
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      cb: null,
      respSource: null,
      currentPage: 1,
      total: 0,
      queryString: "",
      clearClick: false,
      loadMoreDisabled: false,
    };
  },
  computed: {
    mergeConfig() {
      let { dataSource } = this.config;
      if (dataSource && dataSource.length) {
        const dataItem = dataSource[0];
        if (typeof dataItem !== "object") {
          dataSource = dataSource.map((item) => ({ [this.valueKey]: item }));
        } else if (!{}.hasOwnProperty.call(dataItem, this.valueKey)) {
          throw Error(
            `Each item of dataSource should has ${this.valueKey} property`
          );
        }
      } else {
        dataSource = [];
      }
      return {
        ...DefaultConfig,
        ...this.$aileAutocomplete.config,
        ...this.config,
        dataSource,
      };
    },

    calcClearable() {
      return typeof this.clearable === "undefined"
        ? this.$aileAutocomplete.clearable
        : this.clearable;
    },

    shouldTrim() {
      return typeof this.mergeConfig.trim === "undefined"
        ? this.$aileAutocomplete.config.trim
        : this.mergeConfig.trim;
    },

    calcStyle() {
      const style = {};
      if (this.mergeConfig.width) style.width = this.mergeConfig.width;
      return style;
    },

    /**
     * 是否可以继续滚动加载
     */
    canLoadMore() {
      return (
        this.mergeConfig.scrollable &&
        this.mergeConfig.remoteMethod &&
        this.currentPage * this.mergeConfig.pageSize < this.total
      );
    },
  },
  methods: {
    handleChange(val) {
      if (this.mergeConfig.trimBeforeChange) {
        val = val.trim();
        this.$emit('update:modelValue', val);
      }
      this.$emit('change', val);
    },
    handleSelect(item) {
      this.loadMoreDisabled = true;
      this.$emit("select", item);
    },
    focus() {
      this.$refs.input.focus();
    },
    handleClear() {
      this.clearClick = true;
      this.$emit("clear");
    },

    /**
     * 远程获取数据
     */
    getRemoteMethod(cb) {
      const { scrollable } = this.mergeConfig;
      this.loadMoreDisabled = false;
      if (scrollable) {
        // 滚动分页加载
        this.cb = cb;
        this.currentPage = 1;
        return this.fetchListByScroll();
      }
      // 无分页加载
      return this.fetchListOnce();
    },

    /**
     * 采用无分页加载
     */
    async fetchListOnce() {
      const {
        queryKey,
        remoteMethod,
        requestParams,
        respFormatter,
        respDataField,
      } = this.mergeConfig;
      const query = { [queryKey]: this.queryString, ...requestParams };
      const res = await remoteMethod(query);
      return respFormatter(res[respDataField]);
    },

    /**
     * 采用分页加载
     */
    async fetchListByScroll() {
      const {
        queryKey,
        remoteMethod,
        requestParams,
        respFormatter,
        pageField,
        sizeField,
        pageSize,
        respDataField,
        respTotalField,
      } = this.mergeConfig;
      const query = { [queryKey]: this.queryString, ...requestParams };
      query[pageField] = this.currentPage;
      query[sizeField] = pageSize;
      try {
        const res = await remoteMethod(query);
        const respSource = respFormatter(res[respDataField]);
        this.total = res[respTotalField];
        if (this.currentPage === 1) {
          this.respSource = respSource;
          return respSource;
        }
        this.respSource = [...this.respSource, ...respSource];

        this.cb(this.respSource);
      } catch (error) {
        this._reset();
      }
    },

    /**
     * 滚动加载
     */
    handleLoadMore() {
      if (this.loadMoreDisabled || !this.canLoadMore) return;
      this.currentPage++;
      this.fetchListByScroll();
    },

    /**
     * 获取输入建议数据
     */
    async handleFetchSuggestions(queryString, cb) {
      if (this.clearClick) {
        // hack 当点击清除按钮 防止请求
        this.clearClick = false;
        return cb([]);
      }
      this.queryString = typeof queryString === "object" ? "" : queryString;
      const { remote, dataSource } = this.mergeConfig;
      let results = [];
      if (remote) {
        // 返回远程请求获取数据
        results = await this.getRemoteMethod(cb);
      } else {
        // 返回传入的静态数据
        results = queryString
          ? dataSource.filter((item) =>
              (item[this.valueKey] || "").includes(queryString)
            )
          : dataSource;
      }
      cb(results);
    },

    /**
     * 重置
     */
    _reset() {
      this.respSource = [];
      this.currentPage = 1;
      this.total = 0;
      this.queryString = "";
      this.clearClick = false;
    },
  },
};
</script>

<style scoped>
.aile-autocomplete {
  display: inline-block;
  width: auto;
}
</style>