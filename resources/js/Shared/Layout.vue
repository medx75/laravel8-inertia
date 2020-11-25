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
                this.$helpers.checkAuth(this.$page.props.user,this.$store);
            },
        },
    },
    methods: {
        url() {
            return location.pathname.substr(1);
        },
    },
    created: function() {
        this.$helpers.checkAuth(this.$page.props.user,this.$store);
    }
}

</script>