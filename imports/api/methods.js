import { Meteor } from 'meteor/meteor';
// Do I need to import each collection name individually?

Meteor.methods({
  addUser() {
    UserProfile.insert({
      user_id: Meteor.user()._id,
      routines: [],
      currentRoutine: '',
      displayName: '',
      lastWorkoutLog: ''
    }, function(err, res) {
      if (err) {throw err}
    })
  },

  // Accepts a routine object, i.e.
  // { routineName: "Tom's Routine",
  // workouts: [
  //   {
  //     workoutName: "Chest Day",
  //     exercises: [...]
  //   },
  //   {
  //     workoutName: "Back Day",
  //     exercises: [...]
  //   },
  //   {
  //     workoutName: "Leg Day",
  //     exercises: [...]
  //   },
  // ]}
  addRoutine(data) {
    var workouts = data.workouts;

    Routine.insert({
      routineName: data.routineName,
      user_id: Meteor.userId()
    }, function(err, res) {
      if (err) {throw err}

      // Unsure if you can have inserts inside a loop but I don't see why not
      for (var i=0; i<workouts.length; i++) {
        Workout.insert({
          workoutName: workouts[i].workoutName,
          exercises: workouts[i].exercises,
          routine_id: res
        })
      }

      UserProfile.update(
        { _id: Meteor.userId() },
        { $push: { routines: res }, $set: {currentRoutine: res }}
      )

      // Not sure if this is correct, idea is to push the routine that was just added to the user's routines 
      //  list and set it as their current routine
    });
  },
  
  // Accepts a workout log, i.e.
  // { workout_id: workoutID (this can be a variable passed in from the previous modal workout selection, or
  //      we'll have another query to get it)
  //   date: 1/19/2017,
  //   log: [{ exerciseName: "Bench Press", weights: [135, 185, 215]}, ...]
  // }
  logWorkout(data) {
    LoggedWorkout.insert({
      user_id: Meteor.user()._id,
      workout_id: data.workout_id,
      date: data.date,
      log: data.log
    })
  },

  // Returns the id for the user's current routine, so that you can easily then call getWorkoutOptions
  getCurrentRoutine() {
    var currentUser = UserProfile.findOne({ _id: Meteor.user()._id }).fetch();
    return currentUser.currentRoutine;
  },

  // Accepts a routine ID
  // Returns an object of Workout collections that belong to the routine passed in
  getWorkoutOptions(data) {
    var workouts = Workout.find({ routine_id: data }).fetch();
    return workouts;
  }

})