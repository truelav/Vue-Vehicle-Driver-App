<template>
    <div class="list-container">
        <form @submit.prevent class="form">
            <div class="input-header-container">
                <h3 class="input-header">Add New Vehicle</h3>
                <h4 class="input-subheader">All Fields Are Required*</h4>
            </div>
            <div class="input-container">
                <my-label>Vehicle Make</my-label>
                <my-input 
                    v-model="vehicle.make"
                    type="text"
                    placeholder="eg. Toyota"
                />
            </div>
            <div class="input-container">
                <my-label>Vehicle Model</my-label>
                <my-input 
                    v-model="vehicle.model"
                    type="text"
                    placeholder="eg. Corolla"
                />
            </div>
            <div class="input-container">
                <my-label>Licence Plate</my-label>
                <my-input 
                    v-model="vehicle.license_plate"
                    type="text"
                    placeholder="eg. ABC123"
                />
            </div>
            <div class="input-container">
                <my-label>Status</my-label>
                <my-input 
                    type="text"
                    disabled
                    placeholder="will auto update"
                />
            </div>
            <div class="input-container">
                <my-label>Assigned Driver</my-label>
                <my-input 
                    type="text"
                    disabled
                    placeholder="will auto update"
                />
            </div>
            <my-button 
                :theme="'btn-primary'"
                @click="addVehicle" 
            >
                Add Vehicle
            </my-button>
        </form>
    </div>
</template>

<script>
    import MyButton from '../UI/MyButton.vue';
    export default {
        emits: ['add-vehicle'],
        components: { MyButton },
        data(){
            return {
                vehicle: {
                    make: '',
                    model: '',
                    license_plate: '',
                    status: 'available',
                    driverId: '',
                    userId: ''
                },
                isFormFilled: false
            }
        },
        methods: {
            addVehicle(){
                this.$emit('add-vehicle', this.vehicle);
            }
        }
    }
</script>

<style>

</style>