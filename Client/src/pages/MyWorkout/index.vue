<script lang="ts">
import { ref } from 'vue'
import { getWorkouts, type Workout } from '@/models/workouts'
import WorkoutForm from '@/components/WorkoutForm.vue'

const workouts = ref<Workout[]>([])

workouts.value = getWorkouts().data
</script>

<template>
  <h1>My Workouts</h1>
  <div class="shelf">
    <WorkoutForm v-for="workout in workouts" :key="workout.id" :workout="workout" />
  </div>
</template>

<style scoped>
.shelf {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.shelf.box {
  width: 300px;
}
</style>
