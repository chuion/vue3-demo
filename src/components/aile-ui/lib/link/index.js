import AileLink from './src/Link.vue';

AileLink.install = function(app, option = {}) {
  const defaultOption = {
    underline: true,
    config: {}
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  app.config.globalProperties.$aileLink = {
    ...defaultOption,
    ...option
  };
  app.component(AileLink.name, AileLink);
};

export default AileLink;
