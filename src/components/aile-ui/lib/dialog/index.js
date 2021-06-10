import AileDialog from './src/Dialog.vue';

AileDialog.install = function(app, option = {}) {
  const defaultOption = {
    width: '50%',
    appendToBody: null,
    closeOnClickModal: true,
    closeOnPressEscape: true
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  app.config.globalProperties.$aileDialog = {
    ...defaultOption,
    ...option
  };
  app.component(AileDialog.name, AileDialog);
};

export default AileDialog;
