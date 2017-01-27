import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';

Template.myTemplate.topGenresChart = function() {
    var title = Session.get('currentRoutine') + ': ' + Session.get('workoutName');
    var id = Session.get('workout_id');

    var logs = [];
    var loggedExercises = Session.get('exercises');
    console.log(loggedExercises);

    Meteor.call('getWorkoutLogs', id, function(err, res) {
        var exercises = [];
        for (var i=0;i<res.length;i++) {
            logs.push(res[i].log);
        }
        for (var i=0; i<logs.length;i++) {
            for (var z=0; z<logs[i].length;z++) {
                var currentLog = logs[i];
                if (i == 0) {
                    exercises.push({ name: currentLog[z].exerciseName, data: [parseInt(currentLog[z].weights[0])], type: 'line'})
                }
                else {
                    exercises[z].data.push(parseInt(currentLog[z].weights[0]))
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
        tooltip: {
            formatter: function() {
                
            }
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
            }
        },
        yAxis: {
            title: {
                text: 'Weight'
            }
        },
        series: loggedExercises
    };
};
