<template>
    <div class="driver-details">
      <div class="page-header">
        <h2>Driver Details Page</h2>
      </div>
      <div v-if="!isDriverLoading" class="driver-details-section">
        <driver-edit-form 
          :driver="driver"
          :isDriverLoading="isDriverLoading"
          @saveDriver="handleDriverEdit"
        />
      </div>
      <my-loading v-else modelValue="Driver Details"/>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed  } from 'vue'
  import { useRoute } from 'vue-router';
  import { useDrivers } from '@/hooks/driver/useDrivers';

  import DriverEditForm from "@/components/Driver/DriverEditForm.vue";
  import MySelect from "@/components/UI/MySelect.vue";
  import MyInput from "@/components/UI/MyInput.vue";
  import MyButton from "@/components/UI/MyButton.vue";
  import MyLoading from '@/components/UI/MyLoading.vue';

  export default {
    components: {
      DriverEditForm,
      MyInput,
      MySelect,
      MyButton,
      MyLoading 
    },
    setup() {
      const route = useRoute();
      const dialogIsVisible = ref(false)
      const id = computed(() => route.params.id);
      const { driver, fetchDriver, isDriverLoading, editDriver } = useDrivers()

      const handleDriverEdit = (driver) => {
        console.log(driver)
        editDriver(driver)
      }

      onMounted(async ()=> {
        fetchDriver(id.value)
      })

      return {
        driver,
        fetchDriver,
        isDriverLoading,
        handleDriverEdit,
        dialogIsVisible,
        id
      };
    },
  };
  </script>
  
  <style scoped>
    .driver-details-section {
      margin: 25px 15px;
    }
  </style>