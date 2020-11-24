<template>
 <div>
    <header-menu :key="url()" />
    <slot />
       {{ $page }} <br>
       {{ $store}}
  </div>
</template>

<script>
import HeaderMenu from '@/Shared/HeaderMenu'
import store from '@/utils/store.js'

export default {
    components: {
        HeaderMenu,
    },
    data() {
        return {

        }
    },
    watch: {
        '$page.props.user.id': {
            handler(oldval, newval) {
                (this.$page.props.user !== null)  ? this.$store.logged = true :  this.$store.logged = false;
            },
        },
    },
    methods: {
        url() {
            return location.pathname.substr(1);
        },
    },
    created: function() {
        (this.$page.props.user !== null) ? this.$store.logged = true :  this.$store.logged = false;
        ((this.$page.props.user !== null)&&(this.$page.props.user.adm == 1))  ? this.$store.adm = true :  this.$store.adm = false;
    }
}

</script>