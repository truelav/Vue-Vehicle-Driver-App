<template>
    <div class="my-label">
        <label>
          <slot></slot>
        </label>
    </div>
</template>
  
<script>
  export default {
    name: 'my-label',
    props: {
      modelValue: String
    }
  }
</script>
  
<style scoped>
  .my-label {
    margin-bottom: .5rem;
    margin-left: .25rem;
  }
</style>