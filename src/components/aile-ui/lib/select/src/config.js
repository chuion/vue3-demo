export const DefaultConfig = {
  /**
   * 关于列表配置
   * ————————————————————————————————————————————————
   */

  /**
   * data 选项列表
   * 参数可选类型: Array[String] / Array[Object]
   */
  data: [],

  /**
   * 是否清空选项列表
   * 参数可选类型: Boolean
   * aileSelect内部会Watch该属性，当属性值为true时，清空当前的选项列表
   */
  isClear: false,

  /**
   * 关于el-option的配置
   * ————————————————————————————————————————————————
   */

  /**
   * 设置el-option的label的格式化
   * 参数可选类型: [String, Function]
   */
  label: undefined,

  /**
   * 设置el-option的value的格式化
   * 参数可选类型: [String, Function]
   */
  value: undefined,

  /**
   * 设置el-option的disabled的格式化
   * 参数可选类型: [Boolean, Function]
   */
  disabled: false,

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  showTooltip: false,

  /**
   * 设置tooltip采用的组件名称
   * 参数可选类型: 'aile-tooltip' | 'el-tooltip'
   * 默认采用 AileTooltip，如果是按需加载，则需手动配置为 'el-tooltip'
   */
  tooltipComponent: "aile-tooltip",

  /**
   * 关于滚动加载
   * ————————————————————————————————————————————————
   */

  /**
   * 当queryField的值为空时，是否允许继续发送请求
   * 参数可选类型: Boolean
   */
  nonEmpty: false,

  /**
   * 是否开启滚动加载
   * 参数可选类型: Boolean
   */
  scrollable: true,

  /**
   * remoteMethod 为远程请求函数
   * 参数可选类型: Function 需要返回 Promise
   */
  remoteMethod: undefined,

  /**
   * 远程搜索的参数名称
   * 参数可选类型: String
   */
  queryField: "",

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // 远程搜索的其他参数，会和queryField合并
  // 参数可选类型: Object
  requestParams: {},

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // 是否只执行一次初始化请求（用于仅将API传入并获取下拉列表，但不需要远程搜索）
  onceRequest: false,

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // pageField,sizeField 为分页字段名称
  pageField: "page_index",
  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  sizeField: "page_size",

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // 页容量
  pageSize: 20,

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // respDataField/respTotalField 请求结果的data/total字段名称
  respDataField: "data",
  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  respTotalField: "total",

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // 请求成功后事件回调
  // 参数可选类型: Function
  respFormatter: (list) => list,

  /**
   * 设置el-option是否需要显示tooltip
   * 参数可选类型: [Boolean, Function]
   */
  // 所有请求均展示loading效果，默认为false，仅展示初次加载的loading
  showEachLoading: false,
};

export const DefaultSelectAttrs = {
  remote: false,
  filterable: false,
  popperAppendToBody: false,
  defaultFirstOption: true,
};

export const DefaultTooltipAttrs = {
  placement: "top",
};
