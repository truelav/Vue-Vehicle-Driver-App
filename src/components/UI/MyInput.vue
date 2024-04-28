<template>
    <input 
      :value="modelValue" 
      @input="updateInput" 
      class="input" 
      :class="theme"
      type="text"
    >
</template>
  
<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number],
      theme: {
        type: String
      }
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>
  
<style scoped>
  .available{
    background-color: #eff7ef
  }
  .occupied {
    background-color: #f7efef
  }
</style>