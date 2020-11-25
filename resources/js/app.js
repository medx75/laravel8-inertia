require('./bootstrap');
  
import Vue from 'vue'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import PortalVue from 'portal-vue'
Vue.use(PortalVue)

import { InertiaApp, plugin } from '@inertiajs/inertia-vue'
Vue.use(plugin)

import { InertiaProgress } from '@inertiajs/progress/src'
InertiaProgress.init({
    delay: 100,
})

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })

import store from './utils/store.js'
Vue.use(store)
import helpers from './utils/helpers';
Vue.use(helpers)

let app = document.getElementById('app')

new Vue({
    metaInfo: {
        titleTemplate: (title) => title ? `${title}` : 'Inertia'
    },
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)