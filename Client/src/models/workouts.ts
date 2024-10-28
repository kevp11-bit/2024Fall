import data from '../data/workouts.json'
import type { DataListEnvelope } from './dataEnvelope'

export function getWorkouts(): DataListEnvelope<Workout> {
  return {
    data: data.workout
  }
}

export interface Workout {
  id: number
  description: string
  time: string
  location: string
}
