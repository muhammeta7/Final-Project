// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';
import {Chart} from 'react-google-charts';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

// Create Component
class ProgressGraph extends Component {

  render(){
    return(
      <Card>
        <CardHeader>
          <h2>Your Progress</h2>
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="ScatterChart" 
              data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
              options={{}}
              graph_id="ScatterChart"
              width="100%"
              height="400px"
              legend_toggle
             />
          </div>
        </CardHeader>
      </Card>
    );
  }
};


export default ProgressGraph;