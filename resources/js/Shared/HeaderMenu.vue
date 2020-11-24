<template>
<div>
<nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <inertia-link href="/">
                        <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                    </inertia-link>
                </div>
                <div class="hidden md:block">
                    <div class="ml-5 flex items-baseline space-x-4"  v-if="$store.logged">
                        <inertia-link class="px-3 py-2 rounded-md text-sm font-medium"
                                    :class="route().current('dashboard.index') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'" 
                                    :href="route('dashboard.index')">
                                    Dashboard
                        </inertia-link>
                    </div>
                </div>
            </div>
            <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                    <div class="space-x-4">
                        <inertia-link class="px-3 py-2 rounded-md text-sm font-medium" v-if="! $store.logged"
                                    :class="route().current('login') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'" 
                                    :href="route('login')">
                                    Login
                        </inertia-link>
                        <inertia-link class="px-3 py-2 rounded-md text-sm font-medium" v-if="! $store.logged"
                                    :class="route().current('register') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'" 
                                    :href="route('register')">
                                    Register
                        </inertia-link>
                    </div>

                    <div class="ml-3 relative" v-if="$store.logged">
                        <div>
                            <button @click="isOpen = !isOpen" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="/img/user.png" alt="">
                            </button>
                        </div>

                        <transition
                            enter-active-class="transition ease-out duration-100 transform"
                            enter-class="opacity-0 scale-95"
                            enter-to-class="opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75 transform"
                            leave-class="opacity-100 scale-100"
                            leave-to-class="opacity-0 scale-95">
                            <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                                <div class="rounded-md bg-white shadow-xs">
                                    <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <inertia-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        :href="route('profile.index')">
                                                        Profile
                                        </inertia-link>
                                        <inertia-link class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" v-if="$store.logged"
                                                    href="/logout" method="post" as="button" type="button">
                                                    Logout
                                        </inertia-link>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="-mr-2 flex md:hidden">
                <!-- Mobile menu button -->
                <button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" @click="toggleNavbar()">
                <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" :class="{'block': !showMenu, 'hidden': showMenu}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="h-6 w-6" :class="{'hidden': !showMenu, 'block': showMenu}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div class="block md:hidden" :class="{'hidden': !showMenu, 'block': showMenu}">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <inertia-link class="block px-3 py-2 rounded-md text-base font-medium" v-if="! $store.logged"
                            :class="route().current('login') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'" 
                            :href="route('login')">
                            Login
            </inertia-link>
            <inertia-link class="block px-3 py-2 rounded-md text-base font-medium" v-if="! $store.logged"
                            :class="route().current('register') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'" 
                            :href="route('register')">
                            Register
            </inertia-link>
            <inertia-link class="block px-3 py-2 rounded-md text-base font-medium" v-if="$store.logged"
                            :class="route().current('dashboard.index') ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'" 
                            :href="route('dashboard.index')">
                            Dashboard
            </inertia-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700" v-if="$store.logged">
            <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="/img/user.png" alt="">
                </div>
                <div class="ml-3">
                    <div class="text-base font-medium leading-none text-white">My Settings</div>
                </div>
            </div>
            <div class="mt-3 px-2 space-y-1">
                <inertia-link class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                :href="route('profile.index')">
                                Profile
                </inertia-link>
                <inertia-link  class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            href="/logout" method="post" as="button" type="button">
                            Logout
                </inertia-link>
            </div>
        </div>
    </div>
</nav>
</div>

</template> 

<script>
import store from '@/utils/store.js'

export default {
    components: {

    },
    data() {
        return {
            isOn: false,
            isOpen: false,
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function() {
            console.log('Navbar')
            this.showMenu = !this.showMenu;
        },
    },
}
</script>