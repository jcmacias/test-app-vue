import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Details from './views/Details.vue';

Vue.use(VueRouter);


const routes = [
 // { path: '/', component: App },
  { path: '/', component: Home },
  { path: '/Details/:id', component: Details }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  //components:{App}
}).$mount('#app')
