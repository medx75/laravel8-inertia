export default {
    install:function(Vue, options) {
        Vue.prototype.$helpers = {};
        Vue.prototype.$helpers.checkAuth = function(user,store) {
            (user !== null) ? store.logged = true :  store.logged = false;
            ((user !== null) && (user.adm == 1))  ? store.adm = true : store.adm = false;
        };
    }
};
