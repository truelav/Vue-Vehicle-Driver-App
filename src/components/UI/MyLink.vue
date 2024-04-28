<template>
    <router-link :to="{ name: 'vehicle', params: { id: driver.id }}">
        <slot></slot>
    </router-link>
</template>
  
<script>
  export default {
    name: 'my-link',
    props: {
      myLinkModel: {
        type: Object
      }
    }
  }
</script>
  
<style scoped>
  .my-link {

  }
</style>