<template>
    <div class="list-container">
        <vehicle-list-item-head />
        <ul>
            <li v-for="vehicle in vehicles" :key="vehicle.id">
                <vehicle-list-item 
                :vehicle="vehicle" 
                @deleteVehicle="(vehicle) => this.$emit('delete-vehicle', vehicle)"
            />
            </li>
        </ul>
    </div>
</template>
<script>
    import VehicleListItem from '@/components/Vehicle/VehicleListItem.vue';
    import VehicleListItemHead from '@/components/Vehicle/VehicleListItemHead.vue';

    export default {
        components: {  VehicleListItem, VehicleListItemHead },
        props: {
            vehicles: {
                type: Array,
                required: true
            }
        }
    };
</script>

<style>

</style>
