export default {
    install:function(Vue, options) {
        Vue.prototype.$store = {};
        Vue.prototype.$store.logged = false;
        Vue.prototype.$store.adm = false;
    }
};