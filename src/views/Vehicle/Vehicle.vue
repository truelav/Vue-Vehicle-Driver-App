<template>
  <div class="vehicle-details">
    <div class="page-header">
      <h2>Vehicle Details Page</h2>
    </div>
    <div class="vehicle-details-section" v-if="!isVehicleLoading">
      <vehicle-edit-form 
        :vehicle="vehicle"
        :drivers="drivers"
        :isVehicleLoading="isVehicleLoading"
        :isEditVehicleSuccess="isEditVehicleSuccess"
        @saveVehicle="handleVehicleEdit"
      />
    </div>
    <my-loading v-else modelValue="Vehicle Details"/>
  </div>
</template>

<script>
  import { ref, onMounted, computed  } from 'vue'
  import { useRoute } from 'vue-router';
  import { useDrivers } from '@/hooks/driver/useDrivers';
  import { useVehicles } from '@/hooks/vehicle/useVehicles';

  import VehicleEditForm from '@/components/Vehicle/VehicleEditForm.vue';
  import MySelect from "@/components/UI/MySelect.vue";
  import MyInput from "@/components/UI/MyInput.vue";
  import MyButton from "@/components/UI/MyButton.vue";
  import MyLabel from "@/components/UI/MyLabel.vue";
  import MyLoading from '@/components/UI/MyLoading.vue';

  export default {
    components: {
      VehicleEditForm,
      MyButton,
      MyInput,
      MySelect,
      MyLabel,
      MyLoading,
    },
    setup() {
      const route = useRoute();
      const id = computed(() => route.params.id);
      const dialogIsVisible = ref(false)
      const {drivers, fetchDrivers, editDriver} = useDrivers()
      const {vehicle, fetchVehicle, isVehicleLoading, editVehicle, isEditVehicleSuccess} = useVehicles()

      const handleVehicleEdit = (vehicle, oldDriver, newDriver) => {
        console.log(vehicle, oldDriver, newDriver)
        editVehicle(vehicle)
        if(oldDriver.id){
          editDriver(oldDriver)
        }
        if(newDriver.id){
          editDriver(newDriver)
        }
        fetchDrivers()
      }

      onMounted(async ()=> {
        fetchVehicle(id.value)
        fetchDrivers()
      })

      return {
        id,
        drivers,
        vehicle,
        fetchVehicle,
        fetchDrivers,
        isVehicleLoading,
        handleVehicleEdit,
        isEditVehicleSuccess,
        dialogIsVisible
      };
    }
  };
</script>

<style scoped>
  .vehicle-details-section {
    margin: 25px 15px;
  }
</style>