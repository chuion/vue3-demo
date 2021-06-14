import AileInput from './src/Input.vue';
import { checkType } from "../../utils";

AileInput.install = function(app, option = {}) {
  // 检查参数安全
  if (checkType(option) !== "object") {
    throw Error(`Invalid plugin option: Expect object, got ${checkType(option)}!`);
  }
  // 挂载全局配置
  app.config.globalProperties.$aileInput = {
    config: option.config || {},
    attrs: option.attrs || {},
  };
  // 注册全局组件
  app.component(AileInput.name, AileInput);
};

export default AileInput;
