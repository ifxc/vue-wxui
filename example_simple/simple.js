import Vue from 'vue';
import Wxui from 'vue-wxui';

Vue.component('wxui-icon', Wxui.Icon);
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    components: {
        'wxui-button': Wxui.Button
    }
});
