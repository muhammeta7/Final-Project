import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

Template.myTemplate.topGenresChart = function() {
  // Receives the current routine and dashboard workout information chosen from ProgressChart component
  var currentRoutine = Session.get('currentRoutine');
  var workoutName = Session.get('workoutName');
  var title;
  if(currentRoutine == undefined || workoutName == undefined){
    title = "Please create a routine to view your progress chart."
  }
  else{
    title = currentRoutine + ': ' + workoutName;
  }

  var id = Session.get('workout_id');

  // To be set in the below database method callback
  var loggedExercises = Session.get('exercises');

  Meteor.call('getWorkoutLogs', id, function(err, res) {
    var exercises = [];

    for (var i=0; i<res.length; i++) {
      for (var z=0; z<res[i].log.length; z++) {
        var currentLog = res[i].log;

        // Turns the weights into integers
        var numericalWeights = currentLog[z].weights.map(Number);

        // Prevents exercises from getting duplicated in the data array
        if (i == 0) {
          exercises.push({ name: currentLog[z].exerciseName, data: [[(res[i].date.getTime()), Math.max.apply(Math, numericalWeights)]], type: 'line'})
        }
        // Dates are converted to milliseconds so that highcharts recognizes them correctly
        else {
          exercises[z].data.push([(res[i].date.getTime()), Math.max.apply(Math, numericalWeights)])
        }
      }
    }
    Session.set({exercises: exercises});
  });

  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: title
    },
    
    plotOptions: {
      line: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          },
          connectorColor: 'silver'
        }
      }
    },
    xAxis: {
      title: {
        text: 'Date'
      },
      type: 'datetime',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%m/%d', this.value);
        }
      },
    },
    yAxis: {
      title: {
        text: 'Weight'
      }
    },
    series: loggedExercises
  }
}
