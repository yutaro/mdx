import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from '../view/index.vue'
import note  from '../view/note.vue'

export default new VueRouter({
    routes : [
        { path : "/" , component : index },
        { path : '/note', component : note },
    ]
})