// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// Page
class LogWorkout extends Component {
  render() {
    return (
      <div>

        {/* Title */}
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header"><h4>[Workout Name]</h4></li>
            <li className="collection-item">[Workout Day]</li>
          </ul>
        </div>


        {/* List of Excerises */}
        <div className="container">
          
          {/* Iterate Over Excerises */}
          
            {/* Excercise 1 */}
            <ul className="collapsible" data-collapsible="accordion">
              <li>

                {/* Exercise Name */}
                <div className="collapsible-header">
                  <b>[Ex. 1 Name]</b>
                </div>

                {/* Exercise Input Form */}
                <div className="collapsible-body">
                  <div className="container">
                    <div className="row">
                      <br/>
                      <form className="col s12">
                        <div className="row">

                          {/* Iterate Over Sets */}

                            <div className="input-field col s4">
                              <input id="exName-1" placeholder="[xxx]" type="number" min="0" className="validate" />
                              <label for="exName-1">Set 1 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-2" placeholder="[xxx]" type="number" min="0" className="validate" />
                              <label for="exName-2">Set 2 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-3" placeholder="[xxx]" type="number" min="0" className="validate" />
                              <label for="exName-3">Set 3 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-4" placeholder="[xxx]" type="number" min="0" className="validate" />
                              <label for="exName-4">Set 4 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-5" placeholder="[xxx]" type="number" min="0" className="validate" />
                              <label for="exName-5">Set 5 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-6" placeholder="[xxx]" type="number" min="0" className="validate" />
                              <label for="exName-6">Set 6 (x[Reps])</label>
                            </div>                        


                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </li>
            </ul>




            {/* Excercise 2 */}
            <ul className="collapsible" data-collapsible="accordion">
              <li>

                {/* Exercise Name */}
                <div className="collapsible-header">
                  <b>Bench Press</b>
                </div>

                {/* Exercise Input Form */}
                <div className="collapsible-body">
                  <div className="container">
                    <div className="row">
                      <br/>
                      <form className="col s12">
                        <div className="row">

                          {/* Iterate Over Sets */}
                            <div className="input-field col s4">
                              <input id="benchPress-1" placeholder="100" type="number" min="0" className="validate" />
                              <label for="benchPress-1">Set 1 (x25)</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="benchPress-2" placeholder="135" type="number" min="0" className="validate" />
                              <label for="benchPress-2">Set 2 (x15)</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="benchPress-3" placeholder="160" type="number" min="0" className="validate" />
                              <label for="benchPress-3">Set 3 (x10)</label>
                            </div>


                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </li>
            </ul>


          </div>



          {/* Submit Button */}
          <div className="container">
            <div className="row">
              <center>
                {/* This will need a way to collect all the data from the forms above and then hit an api on the backend */}
                {/* Maybe add a confirmation modal too... Complete this workout? You will not be able to edit after this */}
                <input className="btn add-comment-button" type="submit" value="Workout Complete" />
              </center>
            </div>
          </div>


      </div>
    );
  }
}

export default LogWorkout;


