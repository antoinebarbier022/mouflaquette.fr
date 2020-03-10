import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({
      disable: function() {
        var maxWidth = 1080;
        return window.innerWidth < maxWidth;
      }
    });
    
  },
  router,
  render: h => h(App),
}).$mount('#app')
