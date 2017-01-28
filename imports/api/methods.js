import { Meteor } from 'meteor/meteor';

Meteor.methods({

  // Initializes a UserProfile when a user signs up
  addUser() {
    UserProfile.insert({
      user_id: Meteor.user()._id,
      routines: [],
      currentRoutine: '',
      age: '',
      weight: '',
      height: ''
    }, function(err, res) {
      if (err) {throw err}
    })
  },

  // Accepts an object with information i.e.
  // { age: 50, weight: 500, height: 70, currentRoutine: 34ASJ123SODJS824 }
  updateUser(data) {
    UserProfile.update({ user_id: Meteor.userId() }, 
      {$set: { age: data.age,
        weight: data.weight,
        height: data.height,
        currentRoutine: data.currentRoutine }}
        )
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
        { user_id: Meteor.userId() },
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

  // Returns an array of the user's routine IDs, so that you can for example let them change their current routine
  getRoutines() {
    var currentUser = UserProfile.findOne({ user_id: Meteor.userId() });
    return currentUser.routines;
  },

  // Accepts an array of routine IDs, gets an array of routine names
  getRoutineNames(routines) {
    var routineNames = [];
    for (var i=0; i<routines.length; i++) {
      routineNames.push(Routine.findOne({ _id: routines[i] }).routineName);
    }
    return routineNames;
  },

  // Returns the id for the user's current routine, so that you can easily then call getWorkoutOptions
  getCurrentRoutine() {
    var currentUser = UserProfile.find({ user_id: Meteor.userId() }).fetch();
    var routine_id = currentUser[0].currentRoutine;
    var routineName = Routine.find({ _id: routine_id }).fetch();
    return { routine_id: routine_id, routineName: routineName[0].routineName };
  },

  // Accepts a routineID
  setCurrentRoutine(data) {
    console.log(data);
    UserProfile.update(
      { user_id: Meteor.userId() },
      { $set: {currentRoutine: data }}
    )
  },

  // Accepts a routine ID
  // Returns an object of Workout collections that belong to the routine passed in
  getWorkoutOptions(data) {
    var workouts = Workout.find({ routine_id: data }).fetch();
    return workouts;
  },

  // Accepts a workout ID
  // Returns an object of the last log of the user's requested workout
  getPreviousWorkoutLog(workout) {
    return LoggedWorkout.findOne({ user_id: Meteor.userId(), workout_id: workout }, { sort: { date: -1 } }).log;
  },

  getRoutineObjects(){
    return Routine.find({user_id: Meteor.userId()}).fetch();
  },

  // Accepts a workout ID
  // Returns an array of objects
  getWorkoutLogs(workout) {
    return LoggedWorkout.find({ user_id: Meteor.userId(), workout_id: workout }, { sort: { date: 1 } }).fetch();
  },

  getWorkoutName(data) {
    return Workout.findOne({ _id: data }).workoutName
  },
  
  getRoutineName(routineId){
    var routine = Routine.findOne({_id: routineId})
    return routine.routineName;
  },

  getPersonalInfo(){
    var user =  UserProfile.findOne({user_id: Meteor.userId()});
    console.log(user); 
    return user;
  }

})