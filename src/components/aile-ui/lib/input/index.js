import AileInput from './src/Input.vue';

AileInput.install = function(app, option = {}) {
  const defaultOption = { clearable: false };
  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {
      trim: false,
      width: undefined
    };
  }
  app.config.globalProperties.$aileInput = { ...defaultOption, ...option };
  app.component(AileInput.name, AileInput);
};

export default AileInput;
