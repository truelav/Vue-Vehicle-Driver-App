<template>
  <div class="vehicles">
    <div class="page-header">
      <h2>Drivers List:</h2>
    </div>
    <my-dialog v-model:show="dialogIsVisible">
      <driver-add-form 
        @driver-added="handleDriverAdded"
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
        placeholder="Search Driver..."
      />
      <my-button
        :theme="'btn-primary'"
        @click="dialogIsVisible = !dialogIsVisible"
      >
        + Add New Driver
      </my-button>
    </div>
    <driver-list 
      v-if="!isDriversLoading"
      :drivers="filteredAndSearchedDrivers"
      :isDeleteDriverLoading="isDeleteDriverLoading"
      @deleteDriver="handleDriverDelete"
    />
    <my-skeleton v-else :modelValue="'Drivers List'"/>
  </div>
</template>
  
  <script>
    import { ref } from 'vue'
    import { useDrivers } from '@/hooks/driver/useDrivers';
    import { useVehicles } from '@/hooks/vehicle/useVehicles'
    import { useFilteredDrivers } from '@/hooks/driver/useFilteredDrivers';
    import { useFilteredAndSearchedDrivers } from '@/hooks/driver/useFilteredAndSearchedDriver';

    import DriverList from '@/components/Driver/DriverList.vue'
    import DriverAddForm from '@/components/Driver/DriverAddForm.vue'
    import MySelect from "@/components/UI/MySelect.vue";
    import MyInput from "@/components/UI/MyInput.vue";
    import MyButton from "@/components/UI/MyButton.vue";
    import MySkeleton from '@/components/UI/MySkeleton.vue';

    export default {
      components: {
        DriverList,
        DriverAddForm,
        MyInput,
        MySelect,
        MyButton,
        MySkeleton
      },
      setup() {
        const dialogIsVisible = ref(false)
        const { editVehicle } = useVehicles()
        const { drivers, isDriversLoading, fetchDrivers, saveDriver, deleteDriver, isDeleteDriverLoading } = useDrivers()
        const { selectedFilter, filteredDrivers, filterOptions} = useFilteredDrivers(drivers)
        const { searchQuery, filteredAndSearchedDrivers } = useFilteredAndSearchedDrivers(filteredDrivers)

        const handleDriverAdded = (driver) => {
          saveDriver(driver)
          setTimeout(() => {
            fetchDrivers()
            dialogIsVisible.value = false
          }, 300)
        }

        const handleDriverDelete = (driver) => {
          const updatedVehicle = driver.vehicle
          if(updatedVehicle){
            editVehicle({...updatedVehicle, driverId: '', status: 'available'})
          }
          deleteDriver(driver)

          setTimeout(() => {
            fetchDrivers()
          }, 300)
        }

        return {
          drivers,
          saveDriver,
          fetchDrivers,
          searchQuery,
          selectedFilter, 
          filteredDrivers,
          filterOptions,
          dialogIsVisible,
          isDriversLoading,
          handleDriverAdded,
          handleDriverDelete,
          isDeleteDriverLoading,
          filteredAndSearchedDrivers
        };
      }
    };
  </script>
  
  <style scoped>
    .filterSearchAddBar {
      display: grid;
      grid-template-columns: 2fr 6fr 2fr;
      gap: 35px;
      margin: 25px 0;
    }
  </style>