import AileAutoComplete from './src/AutoComplete.vue';

AileAutoComplete.install = function(app, option = {}) {
  const defaultOption = { clearable: false, valueKey: 'query' };
  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = { trim: false, width: undefined };
  }
  app.config.globalProperties.$aileAutocomplete = { ...defaultOption, ...option };
  app.component(AileAutoComplete.name, AileAutoComplete);
};

export default AileAutoComplete;
