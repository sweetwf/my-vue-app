import BaseButton from './BaseButton.vue';

//全局注册基础组件
const install = function (Vue) { 

  if (install.installed) { 
    return;
  }
  Vue.component(BaseButton.name,BaseButton)
}

export default install;