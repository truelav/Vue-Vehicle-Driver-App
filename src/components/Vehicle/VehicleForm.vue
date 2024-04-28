<template>
    <form @submit.prevent>
        <h4>Add New Vehicle</h4>
        <input v-model="vehicle.make" type="text" placeholder="Make..."/>
        <input v-model="vehicle.model" type="text" placeholder="Model..."/>
        <input v-model="vehicle.license_plate" type="text" placeholder="Licence Plate..."/>
        <input v-model="vehicle.status" type="text" placeholder="Status..."/>
        <div>
            <p>
                <strong>Assign Driver:</strong>
                <select v-model="vehicle.driver">
                    <option value="">{{ vehicle.driver }}</option>
                    <option 
                        v-for="driver in drivers" 
                        :key="driver.id" 
                        :value="driver.name"
                    >
                        {{ driver.name }}
                    </option>
                </select>
                <button @click="clearDriver">X</button>
            </p>
        </div>
        <button @click="addVehicle" :disabled="loading">Add Vehicle</button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                loading: false,
                drivers: [],
                vehicle: {
                    make: '',
                    model: '',
                    license_plate: '',
                    driver: '',
                    status: ''
                },
            }
        },
        mounted() {
            this.fetchDrivers();
        },
        methods: {
            async fetchDrivers() {
                this.loading = true
                try {
                    const response = await fetch('http://localhost:3000/drivers');
                    if (!response.ok) {
                        throw new Error('Failed to fetch drivers');
                    }
                    this.drivers = await response.json();
                    this.loading = false; 
                } catch (error) {
                    console.error('Error fetching drivers:', error);
                }
            },
            async addVehicle() {
                this.loading = true
                try {
                    setTimeout(async () => {
                        const response = await fetch('http://localhost:3000/vehicles', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(this.vehicle)
                        });
                        if (!response.ok) {
                            throw new Error('Failed to fetch vehicles');
                        }
                        console.log('Vehicle Added Success');
                        this.$emit('vehicle-added', this.vehicle);
                        this.vehicle = {
                            make: '',
                            model: '',
                            driver: '',
                            license_plate: '',
                            status: ''
                        };

                        this.loading = false; // Set loading to false after fetching data
                    }, 700); // Delay of 0.5 seconds (500 milliseconds)
                } catch (error) {
                    console.error('Error fetching vehicles:', error);
                }
            },
            resetFields() {
                this.vehicle = {
                    make: '',
                    model: '',
                    driver: '',
                    license_plate: '',
                    status: ''
                };
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>