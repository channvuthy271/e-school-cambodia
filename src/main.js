import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/tailwind.css"
import axios from 'axios'
import config from "./config"
import helper from "./helper/helper";
import VueSweetalert2 from 'vue-sweetalert2';
import i18n from './i18n'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);


axios.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('token');

        if (token) {
            config.headers['xtoken'] = token
            config.headers['device-id'] = helper.deviceId()
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['app-version'] = config.appVersion;

axios.defaults.headers.common['Authorization'] = `Basic ZS1zY2hvb2wtYXBwOmUtc2Nob29sLWFwcC1QQCQkdzByZCE=`;


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    // use the language from the routing param or default language
    let language = localStorage.getItem('localize')
    if (!language) {
        language = 'en'
    }

    // set the current language for i18n.
    i18n.locale = language
    next()
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
    created(){
        store.dispatch('online/onlineOffline');
        if (!localStorage.getItem('localize')) {
            localStorage.setItem('localize', 'en')
        }
    }
}).$mount('#app');
