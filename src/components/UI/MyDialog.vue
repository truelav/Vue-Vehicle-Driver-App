<template>
    <div class="dialog" 
      v-if="show" 
      @click.stop="hideDialog"
    >
      <div 
        @click.stop 
        class="dialog__content"
      >
        <div 
          @click="hideDialog" 
          class="close-dialog-container"
        >
          <my-button :theme="'btn-outlined'">
            X Close
          </my-button>
        </div>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'my-dialog',
    props: {
      show: {
        type: Boolean,
        default: false
      }
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