<template>
  <div class="app-container">
    <main>
      <!-- Main content goes here -->
    </main>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Created by <a href="">Kevin Portillo</a>. Fitness Tracker
          <a href="">Suny New Paltz</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the footer stays at the bottom */
}

main {
  flex: 1; /* Allows the main content to grow and push the footer down */
}

.footer {
  background-color: rgb(93, 193, 235);
  color: white;
  padding: 0.5rem; /* Adjust padding for a shorter footer */
  margin-right: -15%;
  margin-left: -15%;
  margin-bottom: 0;
}
</style>
