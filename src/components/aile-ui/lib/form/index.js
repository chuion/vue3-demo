/*
 * @Author: songhc
 * @Date: 2021-06-04 18:37:03
 * @LastEditTime: 2021-06-07 14:08:08
 * @LastEditors: songhc
 * @FilePath: /vite-project/src/components/aile-ui/lib/form/index.js
 */
import AileForm from './src/Form.vue';

AileForm.install = function(app, option = {}) {
  const defaultOption = {
    emptyText: '',
    formClass: ''
  };
  app.config.globalProperties.$aileForm = {
    ...defaultOption,
    ...option
  };
  app.component(AileForm.name, AileForm);
};

export default AileForm;
