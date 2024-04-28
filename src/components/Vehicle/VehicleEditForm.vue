<template>
    <div class="edit-form-container">
        <div v-if="isEditVehicleSuccess" class="success-alert-container">
            Data saved successfully!
        </div>
        <div class="list-container">
            <form @submit.prevent class="form">
                <div class="input-header-container">
                    <h3 class="input-header">Edit Vehicle</h3>
                    <h4 class="input-subheader">All Fields Are Required*</h4>
                </div>
                <div class="input-container">
                    <my-label>Vehicle Make:</my-label>
                    <my-input 
                        v-model="vehicle.make"
                        type="text"
                    />
                </div>
                <div class="input-container">
                    <my-label>Vehicle Model:</my-label>
                    <my-input 
                        v-model="vehicle.model"
                        type="text"
                    />
                </div>
                <div class="input-container">
                    <my-label>Vehicle License license plate:</my-label>
                    <my-input 
                        v-model="vehicle.license_plate"
                        type="text"
                    />
                    <VehicleDriverSelect
                        :vehicle="vehicle"
                        :drivers="drivers"
                        @updateDriver="updateDriver"
                        @unassignDriver="unassignDriver"
                    />
                </div>
                <div class="input-container">
                    <my-label>Vehicle Driver:</my-label>
                    <div>
                        <div v-if="vehicle.driver">
                            <my-input 
                                v-model="vehicle.driver.name"
                                disabled
                                type="text"
                            />
                        </div>
                        <div v-else>
                            <my-input 
                                placeholder="No Driver Assigned"
                                disabled
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div class="input-container">
                    <my-label>Vehicle Status:</my-label>
                    <my-input
                        :theme="vehicle.status" 
                        v-model="vehicle.status"
                        disabled
                        type="text"
                    />
                </div>
                <my-button 
                    theme="btn-primary btn-submit"
                    @click="saveVehicle" 
                    :disabled="isVehicleLoading"
                >
                    Save Vehicle
                </my-button>
            </form>
        </div>
    </div>

    <div class="driver-details-container">

    </div>
</template>

<script>
    import VehicleDriverSelect from './VehicleDriverSelect.vue';

    export default {
        emits: ['save-vehicle'],
        components: {
            VehicleDriverSelect
        },
        data(){
            return {
                oldDriver: {},
                newDriver: {}
            }
        },
        props: {
            vehicle: {
                type: Object
            },
            drivers: {
                type: Array
            },
            isVehicleLoading: {
                type: Boolean
            },
            isEditVehicleSuccess: {
                type: Boolean
            }
        },
        methods: {
            saveVehicle(){
                this.$emit('save-vehicle', this.vehicle, this.oldDriver, this.newDriver);
            },
            unassignDriver(oldDriver){
                console.log(oldDriver)
                if(!this.vehicle.driver) return

                this.oldDriver = { ...oldDriver, vehicleId: '', status: 'available' }
                this.vehicle.driver = oldDriver

                this.vehicle.status = 'available'
                this.vehicle.driverId = ''
            },
            updateDriver(oldDriver, newDriver){
                // update the vehicle info
                this.vehicle.status = 'occupied'
                this.vehicle.driverId = newDriver.id

                //update old and new vehicle
                this.oldDriver = { ...oldDriver, vehicleId: '', status: 'available' }
                this.newDriver = { ...newDriver,  vehicleId: this.vehicle.id, status: 'occupied' }

                this.vehicle.driver = this.newDriver
            }
        }
    }
</script>

<style scoped>
    .vehicle-edit-form {
        padding: ''
    }
</style>
