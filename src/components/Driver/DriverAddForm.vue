<template>
    <div class="list-container">
        <form @submit.prevent class="form">
            <div class="input-header-container">
                <h3 class="input-header">Add New Driver</h3>
                <h4 class="input-subheader">All Fields Are Required*</h4>
            </div>
            <div class="input-container">
                <my-label>Driver Name</my-label>
                <my-input 
                    v-model="driver.name"
                    type="text"
                    placeholder="eg John Smith.."
                />
            </div>
            <div class="input-container">
                <my-label>Phone Number</my-label>
                <my-input 
                    v-model="driver.phone_number"
                    type="text"
                    placeholder="eg 123-456-6789"
                />
            </div>
            <div class="input-container">
                <my-label>Email Address</my-label>
                <my-input 
                    v-model="driver.email"
                    type="text"
                    placeholder="eg john@email.com"
                />
            </div>
            <div class="input-container">
                <my-label>Driver status</my-label>
                <my-input 
                    type="text"
                    disabled
                    placeholder="auto updated"
                />
            </div>
            <div class="input-container">
                <my-label>Driver vehicle</my-label>
                <my-input 
                    v-model="driver.vehicle"
                    type="text"
                    disabled
                    placeholder="auto updated"
                />
            </div>
            <my-button 
                :theme="'btn-primary'"
                @click="addDriver" 
                :disabled="loading"
                type="submit"
            >
                Add Driver
            </my-button>
        </form>
    </div>
</template>

<script>
    export default {
        emits: ['driver-added'],
        data(){
            return {
                loading: false,
                driver: {
                    name: '',
                    phone_number: '',
                    email: '',
                    status: 'available',
                    vehicleId: ''
                },
            }
        },
        methods: {
            addDriver(){
                this.$emit('driver-added', this.driver);
            },
            // async saveDriver() {
            //     this.loading = true
            //     try {
            //         setTimeout(async () => {
            //             const response = await fetch('http://localhost:3000/drivers', {
            //                 method: 'POST',
            //                 headers: { 'Content-Type': 'application/json' },
            //                 body: JSON.stringify(this.driver)
            //             });
            //             if (!response.ok) {
            //                 throw new Error('Failed to fetch vehicles');
            //             }
            //             console.log('Driver Added Success');
            //             this.$emit('driver-added');
            //             this.driver = {
            //                 name: '',
            //                 phone_number: '',
            //                 email: '',
            //                 status: 'available',
            //                 vehicle: ''
            //             }
            //             this.loading = false; // Set loading to false after fetching data
            //         }, 700); // Delay of 0.5 seconds (500 milliseconds)
            //     } catch (error) {
            //         console.error('Error adding driver:', error);
            //     }
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>