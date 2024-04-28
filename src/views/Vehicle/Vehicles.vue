<template>
  <div class="vehicles">
    <div class="page-header">
      <h2>Vehicles List:</h2>
    </div>
    <my-dialog v-model:show="dialogIsVisible">
      <vehicle-add-form 
        @addVehicle="handleVehicleAdd"
      />
    </my-dialog>
    <div class="filterSearchAddBar">
      <my-select 
        :options="filterOptions"
        :v-bind:value="selectedFilter"
        v-on:update:value="selectedFilter = $event"
      />
      <my-input 
        class="searchInput"
        v-model="searchQuery"
        placeholder="Search Vehicle..."
      />
      <my-button
        :theme="'btn-primary'"
        @click="dialogIsVisible = !dialogIsVisible"
      >
       + Add New Vehicle
      </my-button>
    </div>
    <vehicle-list 
      v-if="!isVehiclesLoading"
      :vehicles="filteredAndSearchedVehicles"
      @deleteVehicle="handleVehicleDelete"
    />
    <my-skeleton v-else :modelValue="'Vehicles List'"/>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { useDrivers } from '@/hooks/driver/useDrivers';
  import { useVehicles } from '@/hooks/vehicle/useVehicles';
  import { useFilteredVehicles } from '@/hooks/vehicle/useFilteredVehicles';
  import { useFilteredAndSearchedVehicles } from '@/hooks/vehicle/useFilteredAndSearchedVehicles';

  import VehicleList from '@/components/Vehicle/VehicleList.vue'
  import VehicleAddForm from '@/components/Vehicle/VehicleAddForm.vue'
  import MySelect from "@/components/UI/MySelect.vue";
  import MyInput from "@/components/UI/MyInput.vue";
  import MyButton from "@/components/UI/MyButton.vue";
  import MySkeleton from '@/components/UI/MySkeleton.vue';

  export default {
    components: {
      VehicleAddForm,
      VehicleList, 
      MyInput,
      MySelect,
      MyButton,
      MySkeleton
    },
    setup() {
      const dialogIsVisible = ref(false)
      const { editDriver } = useDrivers()
      const { vehicles, addVehicle, isVehiclesLoading, fetchVehicles, deleteVehicle } = useVehicles()
      const { selectedFilter, filteredVehicles, filterOptions} = useFilteredVehicles(vehicles)
      const { searchQuery, filteredAndSearchedVehicles } = useFilteredAndSearchedVehicles(filteredVehicles)

      const handleVehicleAdd = async (vehicle) => {
        addVehicle(vehicle)
        fetchVehicles()
        setTimeout(() => {
          dialogIsVisible.value = false
        }, 800)
      }

      const handleVehicleDelete = (vehicle) => {
        const udpdatedDriver = vehicle.driver
        if(udpdatedDriver){
          editDriver({...udpdatedDriver, vehicleId: '', status: 'available'})
        }
        deleteVehicle(vehicle)

        setTimeout(() => {
          fetchVehicles()
        }, 300)
      }

      return {
        vehicles,
        fetchVehicles,
        isVehiclesLoading,
        selectedFilter, 
        filteredVehicles,
        filterOptions,
        searchQuery,
        handleVehicleAdd,
        handleVehicleDelete,
        filteredAndSearchedVehicles,
        dialogIsVisible
      };
    }
  };
</script>

<style scoped>

</style>