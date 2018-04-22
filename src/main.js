// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.directive('vpshow', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
    rect.left > window.innerWidth ||
    rect.top > window.innerHeight)
  },

  bind(el, binding) {
    el.classList.add('before-enter')
    el.$onScroll = function () {
      if (binding.def.inViewport(el)) {
        el.classList.add('enter')
        el.classList.remove('before-enter')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()
  },

  unbind(el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
