<template>
    <div class="image-container image">
        <img v-if="isVehicleImage"
          src="@/assets/vehicle-image.png" 
          alt="generic driver image" 
          class="my-img"
        />
        <img v-else
          src="@/assets/driver-image.jpg" 
          alt="generic driver image" 
          class="my-img"
        />
    </div>
</template>
    
<script>
    export default {
      name: 'my-image',
      props: {
        isVehicleImage: {
          type: Boolean
        },
        theme: {
          type: String
        }
      }
    }
</script>

<style>
    .my-img {
        width: 50px;
        height: 45px;
        border-radius: 15px;
        object-fit: cover;
    }

</style>