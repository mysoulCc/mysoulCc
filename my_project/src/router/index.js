import Vue from 'vue'
import Router from 'vue-router'
import routers from '@/js/MenuComponent'
import axios from 'axios'

Vue.prototype.axios = axios;
Vue.use(Router)


export default new Router({ 
  mode: 'history',
  routes:routers
})