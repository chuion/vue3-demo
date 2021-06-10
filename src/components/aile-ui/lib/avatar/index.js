import AileAvatar from './src/Avatar.vue';

AileAvatar.install = function(app, option = {}) {
  const defaultOption = {
    fit: 'cover',
    shape: 'circle'
  };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  app.config.globalProperties.$aileAvatar = {
    ...defaultOption,
    ...option
  };

  app.component(AileAvatar.name, AileAvatar);
};

export default AileAvatar;
