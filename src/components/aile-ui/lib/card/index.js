import AileCard from './src/Card.vue';

AileCard.install = function(app, option = {}) {
  const defaultOption = { shadow: 'hover' };

  if ({}.toString.call(option.config) !== '[object Object]') {
    option.config = {};
  }

  app.config.globalProperties.$aileCard = {
    ...defaultOption,
    ...option
  };
  app.component(AileCard.name, AileCard);
};

export default AileCard;
