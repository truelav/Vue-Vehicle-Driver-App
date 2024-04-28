<script setup>
  import { RouterView } from 'vue-router'
  import TheNavigation from '@/components/Navigation/TheNavigation.vue'
</script>

<template>
  <div class="page-wrapper">
    <div class="main">
      <div class="header-container">
        <the-navigation />
      </div>
      <div class="body-container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
</style>
