User = new Mongo.Collection('user');

User.schema = new SimpleSchema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  routines: {
    type: [String]
  },
  currentRoutine: {
    type: Number
  },
  lastWorkoutLog: {
    type: Number
  }
})

Routine = new Mongo.Collection('routine');

Routine.schema = new SimpleSchema({
  name: {
    type: String
  }
})

Workout = new Mongo.Collection('workout');

Workout.schema = new SimpleSchema({
  name: {
    type: String
  },
  routine_id: {
    type: String
  }
})

Exercise = new Mongo.Collection('exercise');

Exercise.schema = new SimpleSchema({
  name: {
    type: String
  },
  numSets: {
    type: Number
  },
  reps: {
    type: [Number]
  },
  units: {
    type: String
  },
  workout_id: {
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
