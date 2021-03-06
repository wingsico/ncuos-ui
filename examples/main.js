// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Ncuos from '../src/index'
import demoBlock from './components/demo-block'
import Hljs from 'highlight.js'

import 'highlight.js/styles/github-gist.css'
import '../src/styles/index.scss'

Vue.use(Ncuos)
Vue.directive('highlightjs', el => {
  let blocks = el.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock)
})

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
