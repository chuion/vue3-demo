import AileSelect from './src/Select.vue';

AileSelect.install = function(app, option = {}) {
  const defaultOption = {
    remote: false,
    filterable: false,
    popperAppendToBody: false,
    defaultFirstOption: true,
    config: {}
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  app.config.globalProperties.$aileSelect = {
    ...defaultOption,
    ...option
  };
  app.component(AileSelect.name, AileSelect);
};

export default AileSelect;
