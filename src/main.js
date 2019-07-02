import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta';

Vue.config.productionTip = false

Vue.use(Meta);

new Vue({
  router,
  render: h => h(App),
  mounted: () => {
    setTimeout(function(){
      document.dispatchEvent(new Event("x-app-rendered"))
    }, 5000)
  }
}).$mount('#app')
