import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/icon/iconfont.css'
import "./mock/mock"
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
Vue.config.productionTip = false
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')