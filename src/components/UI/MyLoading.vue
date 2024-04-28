<template>
    <div class="loading-container">
        <p>Loading {{ modelValue }} ...</p>
    </div>
</template>
  
<script>
  export default {
    name: 'my-loading',
    props: {
      modelValue: String,
      theme: {
        type: String
      }
    }
  }
</script>
  
<style scoped>
  .loading-container {
    padding: 15px;
  }
</style>