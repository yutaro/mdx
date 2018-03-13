import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Slide from './modules/slide.js'
import Line  from './modules/line.js'

import note from './view/note.vue';

const store = new Vuex.Store({
    modules : {

    }
})

// import router from './router/routes.js';

new Vue({
    el : '#app',
    store,
    // router,
    components : {
        note
    }
})