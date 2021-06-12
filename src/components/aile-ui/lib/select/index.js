import AileSelect from './src/Select.vue';
import { checkType } from "../../utils";

AileSelect.install = function(app, option = {}) {
  // 检查参数安全
  if (checkType(option) !== "object") {
    throw Error(`Invalid plugin option: Expect object, got ${checkType(option)}!`);
  }
  // 挂载全局配置
  app.config.globalProperties.$aileSelect = {
    config: option.config || {},
    attrs: option.attrs || {},
  };
  // 注册全局组件
  app.component(AileSelect.name, AileSelect);
};

export default AileSelect;
