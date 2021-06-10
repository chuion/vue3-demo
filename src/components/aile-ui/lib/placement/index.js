import AilePlacement from './src/Placement.vue';

AilePlacement.install = function(app, option = {}) {
  const defaultOption = {
    initText: '初始化中',
    emptyText: '暂无数据'
  };
  app.config.globalProperties.$ailePlacement = {
    ...defaultOption,
    ...option
  };
  app.component(AilePlacement.name, AilePlacement);
};

export default AilePlacement;
