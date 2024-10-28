<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'

const isOpen = ref(false)
const isAccountDropdownOpen = ref(false)
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink to="/App" class="navbar-item">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
        </RouterLink>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <RouterLink to="/MyWorkout" class="navbar-item">
            <i class="fas fa-dumbbell mr-2"></i>
            MyWorkouts
          </RouterLink>

          <RouterLink to="/Stats" class="navbar-item">
            <i class="fas fa-chart-area"></i>
            Statistics
          </RouterLink>

          <RouterLink to="/Friends" class="navbar-item">
            <i class="fas fa-users"></i>
            Friends
          </RouterLink>

          <RouterLink to="/Users" class="navbar-item">
            <i class="fas fa-user-shield"></i>
            Admin
          </RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> <i class="fas fa-user"></i>Account </a>

              <div class="navbar-dropdown">
                <RouterLink to="/NewUser" class="navbar-item"> New User </RouterLink>
                <RouterLink to="/Login" class="navbar-item"> Login </RouterLink>
              </div>
            </div>
            <div class="buttons">
              <RouterLink to="/contact" class="button is-primary">
                <strong>Contact Us </strong>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid rgb(25, 0, 255);
}
</style>
