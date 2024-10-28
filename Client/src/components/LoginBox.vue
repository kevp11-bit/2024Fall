<template>
  <div class="login-container">
    <form class="login-box" @submit.prevent="checkLogin">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="e.g. alex@example.com" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="********" />
        </div>
      </div>

      <button class="button is-primary is-fullwidth">Sign in</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async checkLogin() {
      try {
        const response = await fetch('/path/to/user.json') // Adjust the path
        const users = await response.json()

        const user = users.find(
          (user) => user.email === this.email && user.password === this.password
        )

        if (user) {
          // Successful login logic (e.g., redirect to another page)
          console.log('Login successful:', user)
          this.errorMessage = '' // Clear error message
        } else {
          this.errorMessage = 'Invalid email or password. Please try again.'
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
        this.errorMessage = 'An error occurred. Please try again later.'
      }
    }
  }
}
</script>

<style scoped>
/* Your existing styles */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height to center vertically */
  background-color: white; /* Light background color */
}

.login-box {
  width: 300px;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.button.is-fullwidth {
  width: 100%; /* Ensures button spans the full width of the form */
}

.error {
  color: red; /* Style for error message */
  margin-top: 1rem;
}
</style>
