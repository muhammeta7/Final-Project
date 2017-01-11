import React from 'react';
import { Component } from 'react';

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
                      <form className="col s12">
                        <div className="row">

                          {/* Iterate Over Sets */}
                            <div className="input-field col s4">
                              <input id="exName-1" type="number" min="0" className="validate" />
                              <label for="exName-1">Set 1 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-2" type="number" min="0" className="validate" />
                              <label for="exName-2">Set 2 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-3" type="number" min="0" className="validate" />
                              <label for="exName-3">Set 3 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-4" type="number" min="0" className="validate" />
                              <label for="exName-4">Set 4 (x[Reps])</label>
                            </div>


                            <div className="input-field col s4">
                              <input id="exName-5" type="number" min="0" className="validate" />
                              <label for="exName-5">Set 5 (x[Reps])</label>
                            </div>

                            <div className="input-field col s4">
                              <input id="exName-6" type="number" min="0" className="validate" />
                              <label for="exName-6">Set 6 (x[Reps])</label>
                            </div>                        


                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </li>
            </ul>

          </div>

      </div>
    );
  }
}

export default LogWorkout;


