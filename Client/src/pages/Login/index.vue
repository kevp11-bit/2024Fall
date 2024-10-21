<script setup lang="ts"></script>

<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Login to Your Account</h1>
        <form @submit.prevent="handleLogin" class="box">
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary">Login</button>
            </div>
          </div>
        </form>

        <p>
          <RouterLink to="/forgot-password">Forgot Password?</RouterLink>
        </p>
        <p>New user? <RouterLink to="/create-account">Create an account</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Add your login logic here
  console.log('Logging in with:', email.value, password.value)
}
</script>

<style scoped>
.hero {
  background-color: whitesmoke; /* Light gray background */
}

.box {
  max-width: 400px; /* Set a max width for the login box */
  margin: 0 auto; /* Center the box */
  padding: 20px; /* Add some padding */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.title {
  margin-bottom: 20px; /* Space between title and form */
}
</style>
