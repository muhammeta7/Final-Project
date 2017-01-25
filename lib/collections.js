UserProfile = new Mongo.Collection('userProfile');

UserProfile.schema = new SimpleSchema({
  routines: {
    type: [String]
  },
  currentRoutine: {
    type: String
  },
  user_id: {
    type: String
  },
  age: {
    type: Number
  },
  weight: {
    type: Number
  },
  height: {
    type: Number
  }
})

Routine = new Mongo.Collection('routine');

Routine.schema = new SimpleSchema({
  name: {
    type: String
  },
  user_id: {
    type: String
  }
})

Workout = new Mongo.Collection('workout');

Workout.schema = new SimpleSchema({
  name: {
    type: String
  },
  exercises: {
    type: [Object]
  },
  routine_id: {
    type: String
  }
})

LoggedWorkout = new Mongo.Collection('loggedWorkout');

LoggedWorkout.schema = new SimpleSchema({
  user_id: {
    type: Number
  },
  workout_id: {
    type: Number
  },
  date: {
    type: Date
  },
  log: {
    type: [Object]
  }
})

// Not using a separate Exercise collection anymore, but may re-implement it if we need it
// Instead, the Exercises are nested objects inside the Workout collection

// Exercise = new Mongo.Collection('exercise');

// Exercise.schema = new SimpleSchema({
//   name: {
//     type: String
//   },
//   numSets: {
//     type: Number
//   },
//   reps: {
//     type: [Number]
//   },
//   units: {
//     type: String
//   },
//   workout_id: {
//     type: String
//   }
// })
