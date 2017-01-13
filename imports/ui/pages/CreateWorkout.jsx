import React from 'react';
import { Component } from 'react';

class CreateWorkout extends Component {
  render() {
    return (
      <div>

        {/* Create a Routine */}
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header"><h4>Create a Routine</h4></li>
            <li className="collection-item">
              <div className="row">
                  <div className="input-field col s12">
                    <input id="workout-name" type="text" className="validate" />
                    <label for="workout-name">Routine Name</label>
                  </div>
              </div>
            </li>
          </ul>
        </div>


        {/* Add Workouts */}
        <div className="container">
          <ul className="collection with-header">
            <li className="collection-header"><h4>Add Workouts</h4></li>

            <li className="collection-item">







            </li>
          </ul>
        </div>



          {/* Submit Button */}
          <div className="container">
            <div className="row">
              <center>
                {/* This will need a way to collect all the data from the forms above and then hit an api on the backend */}
                {/* Maybe add a confirmation modal too... Create this workout? You will not be able to edit after this */}
                <input className="btn add-comment-button" type="submit" value="Create Routine" />
              </center>
            </div>
          </div>


      </div>
    );
  }
}

export default CreateWorkout;


