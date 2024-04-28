<template>
    <nav class="navigation">
        <RouterLink
            v-for="navigationLink in navigationLinks"
            class="router-link"
            :class="{'btn-link-active': $route.path === '/drivers'}"
            :to="navigationLink.path"
        >
            {{ navigationLink.name }}
        </RouterLink>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router'
    export default {
        data(){
            return {
                navigationLinks: [
                    { name: 'Home', icon: '&#8962;', path: '/'},
                    { name: 'Vehicles', icon: '&#8962;', path: '/vehicles'},
                    { name: 'Drivers', icon: '&#8962;', path: '/drivers'},
                    { name: 'Map', icon: '&#8962;', path: '/map'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>