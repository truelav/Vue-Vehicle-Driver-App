<template>
    {{ console.log(driver) }}
    <div class="list-item-container">
        <div class="list-item">
            <my-image />
        </div>
        <div class="list-item">
            {{ driver.name }}
        </div>
        <div class="list-item list-item-fit">
            {{ driver.email }}
        </div>
        <div class="list-item">
            ({{ driver.phone_number }})
        </div>
        <div class="list-item">
            <div v-if="driver.vehicle && driver.vehicle.make">
                <router-link 
                    :to="{ name: 'vehicle', params: { id: driver.id }}"
                >
                    <my-button :theme="'btn-width'">
                        {{ driver.vehicle.make}}
                    </my-button>
                </router-link>
            </div>
            <div v-else>
                <my-button :theme="'btn-width'">
                    No Vehicle
                </my-button>
            </div>
        </div>

        <div class="list-item">
            <span>
                <span v-if="driver.status === 'available'" class="green-dot"> &#x1F7E2;</span>
                <span v-else class="red-dot">&#128308;</span>
                {{ driver.status }}
            </span>
        </div>

        <div class="list-item">
            <router-link :to="{ name: 'driver', params: { id: driver.id }}">
                <my-button :theme="'btn-outlined'"># Edit </my-button>
            </router-link>
        </div>
        <div class="list-item">
            <div v-if="isDeleteDriverLoading">
                <p>Deleting...</p>
            </div>
            <my-button 
                theme="btn-red"
                class="button-third"
                @click="deleteDriver" 
            >
                Delete
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['delete-driver'],
        props: {
            driver: {
                type: Object,
                required: true
            },
            isDeleteDriverLoading: {
                type: Boolean
            }
        },
        methods: {
            deleteDriver(){
                this.$emit('delete-driver', this.driver);
            }
        }
    }
</script>

<style scoped>
/* 
    .list-item-container {
        width: fit-content;
    } */

    .list-item-fit {
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>