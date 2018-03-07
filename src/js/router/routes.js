import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '../view/index.vue'

export default new VueRouter({
    routes : [
        { path : "/" , component : index }
    ]
})