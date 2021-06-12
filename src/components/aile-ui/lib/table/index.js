import { checkType } from '../../utils';
import AileTable from './src/Table.vue';

AileTable.install = function(app, option = {}) {
  // 检查参数安全
  if (checkType(option) !== "object") {
    throw Error(`Invalid plugin option: Expect object, got ${checkType(option)}!`);
  }

  // 挂载全局配置
  app.config.globalProperties.$aileTable = {
    config: option.config || {}, // 特殊配置项
    table: option.table || {}, // <el-table />的属性
    tableColumn: option.tableColumn || {}, // <el-table-column />的属性
    pagination: option.pagination || {} // <el-pagination />的属性
  };
  
  // 注册全局组件
  app.component(AileTable.name, AileTable);
};

export default AileTable;
