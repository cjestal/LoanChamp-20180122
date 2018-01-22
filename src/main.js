import Vue from 'vue'
import jQuery from 'jquery'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import App from './App.vue'


window.$ = window.jQuery = jQuery
var bootstrap = require('bootstrap');
var dt = require( 'datatables.net-bs' )();
var numeral = require("numeral");

  
Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    router, // 表示 router: router (ES6屬性簡寫語法糖)
    template: '<App/>',
    components: { App }
})

Vue.filter("formatNumber", function (value) {
    value = value / 100;
    return numeral(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
  });
