<template>
    <div class="edit-form-container">
        <div class="list-container">
            <form @submit.prevent  class="form">
                <div class="input-header-container">
                    <h3 class="input-header">Edit Driver</h3>
                    <h4 class="input-subheader">All Fields Are Required*</h4>
                </div>
                <div class="input-container">
                    <my-label>Driver Name:</my-label>
                    <my-input 
                        v-model="driver.name"
                        type="text"
                    />
                </div>
                <div class="input-container">
                    <my-label>Driver Phone Number:</my-label>
                    <my-input 
                        v-model="driver.phone_number"
                        type="text"
                    />
                </div>
                <div class="input-container">
                    <my-label>Driver Email:</my-label>
                    <my-input 
                        v-model="driver.email"
                        type="text"
                    />
                </div>
                <div class="input-container">
                    <my-label>Driver Status:</my-label>
                    <my-input 
                        :theme="driver.status" 
                        v-model="driver.status"
                        type="text"
                        disabled
                    />
                </div>

                <div v-if="driver.vehicle">
                    <div class="input-container">
                        <h4>Assigned Vehicle</h4>
                    </div>
                    <div class="input-container" >
                        <my-label>Make:</my-label>
                        <my-input 
                            v-model="driver.vehicle.make"
                            type="text"
                            disabled
                        />
                    </div>
                    <div class="input-container" >
                        <my-label>Model:</my-label>
                        <my-input 
                            v-model="driver.vehicle.model"
                            type="text"
                            disabled
                        />
                    </div>
                    <div class="input-container" >
                        <my-label>License Plate:</my-label>
                        <my-input 
                            v-model="driver.vehicle.license_plate"
                            type="text"
                            disabled
                        />
                    </div>
                </div>
                <div class="input-container" v-else>
                    <my-input 
                        placeholder="No vehicle assigned"
                        type="text"
                        disabled
                    />
                </div>

                <my-button 
                    theme="btn-primary btn-submit"
                    @click="saveDriver" 
                    :disabled="isDriverLoading"
                >
                    Save Driver
                </my-button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['save-driver'],
        props: {
            driver: {
                type: Object
            },
            isDriverLoading: {
                type: Boolean
            }
        },
        methods: {
            saveDriver(){
                this.$emit('save-driver', this.driver);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>