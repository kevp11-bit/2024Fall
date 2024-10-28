<script setup lang="ts"></script>

<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Create Your Account</h1>
        <div class="box-container">
          <form @submit.prevent="handleRegister" class="box">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  type="text"
                  v-model="name"
                  class="input"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  v-model="email"
                  class="input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  v-model="password"
                  class="input"
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input
                  type="password"
                  v-model="confirmPassword"
                  class="input"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button type="submit" class="button is-primary">Register</button>
              </div>
            </div>
          </form>
        </div>

        <p>Already have an account? <RouterLink to="/login">Login here</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
  // Add your registration logic here
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  console.log('Registering with:', {
    name: name.value,
    email: email.value,
    password: password.value
  })
}
</script>

<style scoped>
html,
body {
  height: 100%; /* Ensure body takes full height */
  margin: 0; /* Remove default margin */
}

.hero {
  background-color: white; /* Light gray background */
}

.hero-body {
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 0; /* Remove padding for full height */
}

.box-container {
  max-width: 400px; /* Set a max width for the registration box */
  width: 100%; /* Ensure the box is responsive */
  margin: 0 auto; /* Center the box-container */
}

.box {
  padding: 30px; /* Add some padding */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.field {
  margin-bottom: 20px; /* Space between fields */
}

.title {
  margin-bottom: 30px; /* Space between title and form */
}
</style>
