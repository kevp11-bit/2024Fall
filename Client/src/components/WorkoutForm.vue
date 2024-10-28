<script lang="ts">

import type { Workout } from '@/models/workouts'

defineProps<{
    workout: Workout
}>()
</script>

<template>
    <div class="box">
        <div class=" box-content">
            <h3>{{ workout.description }}</h3>
            <p>{{ workout.time }}</p>
            <p>{{ workout.time }}</p>
        </div>
    </div>
</template>

<style scoped>
h3{
    
    font-weight: bold;
}