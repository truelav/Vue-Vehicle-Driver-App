<template>
    {{ console.log(selectedDriver) }}
    <div class="vehicle-driver-select">
        <my-label>Assign From Available Drivers: </my-label>
        <div class="select-driver-container">
            <select v-model="selectedDriver" @change="changeDriver" >
                <option 
                    v-if="drivers.length > 0"
                    disabled 
                    value=""
                >
                    {{ selectedDriver }}
                </option>
                <option 
                    v-else
                    disabled 
                    value="No available Driver"
                >
                    No Availavle Drivers
                </option>
                <option 
                    v-for="driver in drivers" 
                    :key="driver.id" 
                    :value="driver.name"
                >
                    {{ driver.name }}
                </option>
            </select>
            <my-button @click="unassignDriver" theme="btn-red">X Unassign</my-button>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
        emits: ['update-driver', 'unassign-driver'],
        props: {
            vehicle: Object,
            drivers: Array,
        },
        setup(props, { emit }) {
            const vehicle = props.vehicle
            const drivers = props.drivers.filter((driver) => driver.status == 'available')
            const selectedDriver = ref(vehicle.driver ? vehicle.driver.name : 'Select Driver')

            const unassignDriver = () => {
                const oldDriver = vehicle.driver
                emit('unassign-driver', oldDriver);
                selectedDriver.value = ""
            }

            const changeDriver = () => {
                const oldDriver = vehicle.driver
                const newDriver = drivers.filter((driver) => driver.name === selectedDriver.value)[0]
                emit('update-driver', oldDriver, newDriver);
            }

            return {
                vehicle,
                drivers,
                changeDriver,
                selectedDriver,
                unassignDriver,
            }
        }
    };
</script>
<style scoped>
    select {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
    }

    .select-driver-container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 15px
    }

    .vehicle-driver-select {
        margin-bottom: 15px;
    }
</style>