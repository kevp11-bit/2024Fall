<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <NavBar />

  <div class="container">
    <RouterView />
  </div>
  <div class="container">
    <Footer />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}

.container {
  background-color: white;
  box-shadow: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  min-height: 100vh;
}
</style>
