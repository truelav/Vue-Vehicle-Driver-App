<template>
    <div class="list-container">
        <driver-list-item-head />
        <ul>
            <li v-for="driver in drivers" :key="driver.id">
                <driver-list-item 
                    :driver="driver" 
                    :isDeleteDriverLoading="isDeleteDriverLoading"
                    @deleteDriver="(driver) => this.$emit('delete-driver', driver)"
                />
            </li>
        </ul>
    </div>
</template>
<script>
    import DriverListItemHead from '@/components/Driver/DriverListItemHead.vue'
    import DriverListItem from '@/components/Driver/DriverListItem.vue';

    export default {
        components: {  DriverListItem, DriverListItemHead },
        props: {
            drivers: {
                type: Array,
                required: true
            },
            isDeleteDriverLoading: {
                type: Boolean
            }
        }
    };
</script>

<style>
    ul {
        list-style-type: none;
    }
</style>
