<template>
    <div class="list-item-container">
        <div class="list-item">
            <my-image :isVehicleImage="true"/>
        </div>
        <div class="list-item">
            {{ vehicle.make }}
        </div>
        <div class="list-item">
            {{ vehicle.model }}
        </div>
        <div class="list-item">
            {{ vehicle.license_plate }}
        </div>
        <div class="list-item">
            <div v-if="vehicle.driver && vehicle.driver.name">
                <router-link 
                    :to="{ name: 'driver', params: { id: vehicle.driver.id }}"
                >
                    <my-button :theme="'btn-width'">
                        {{ vehicle.driver.name}}
                    </my-button>
                </router-link>
            </div>
            <div v-else>
                <my-button :theme="'btn-width'">
                    No Driver 
                </my-button>
            </div>
        </div>
        <div class="list-item">
            <span>
                <span v-if="vehicle.status === 'available'" class="green-dot"> &#x1F7E2;</span>
                <span v-else class="red-dot">&#128308;</span>
                {{ vehicle.status }}
            </span>
        </div>
        <div class="list-item">
            <router-link :to="{ name: 'vehicle', params: { id: vehicle.id }}">
                <my-button :theme="'btn-outlined'"># Edit </my-button>
            </router-link>
        </div>
        <div class="list-item">
            <my-button 
                theme="btn-red"
                @click="deleteVehicle" 
                :disabled="isDeleteVehicleLoading"
            >
                Delete
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['delete-vehicle'],
        props: {
            vehicle: {
                type: Object,
                required: true
            },
            isDeleteVehicleLoading: {
                type: Boolean
            }
        },
        methods: {
            deleteVehicle(){
                this.$emit('delete-vehicle', this.vehicle);
            }
        }
    }
</script>

<style scoped>

</style>