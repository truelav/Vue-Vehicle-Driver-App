<template>
    <div 
        v-if="isSuccess" 
        class="my-alert"
        :class="theme" 
    >
        <slot></slot>
    </div>
  </template>
  
  <script>

  export default {
    name: 'my-alert',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String
      }
    },
    mounted() {
      console.log('alert mounted')
    },
    methods: {
      hideDialog(){
        this.$emit('update:show', false)
      }
    }
  }
  </script>
  
  <style scoped>

  </style>