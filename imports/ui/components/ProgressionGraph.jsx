// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';
import {Chart} from 'react-google-charts';

// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

// Create Component
class ProgressGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Progress over time',
        hAxis: {title: 'Weight', minValue: 0, maxValue: 315},
        vAxis: {title: 'Date', minValue: 0, maxValue: 20},
        legend: 'none'
      },
      rows: [
        [1, 135, 155],
        [2, 155, 175],
        [3, 160, 180]
      ],
      columns: [
        {
          'type': 'number',
          'label': 'Date'
        },
        {
          'type': 'number',
          'label': 'Bench Press'
        },
        {
          'type': 'number',
          'label': 'Squat'
        }
      ]
    }
  }
  render(){
    return(
      <Card>
        <CardHeader>
          <h2>Your Progress</h2>
          <div className={"my-pretty-chart-container"}>
            <Chart
              chartType="ScatterChart"
              rows={this.state.rows}
              columns={this.state.columns}
              options={this.state.options}
              graph_id="ScatterChart"
              width="100%"
              height="400px"
              legend_toggle
             />
          </div>
        </CardHeader>
      </Card>
    )
  }
}


// old chart:
// chartType="ScatterChart" 
// data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
// options={{}}
// graph_id="ScatterChart"
// width="100%"
// height="400px"
// legend_toggle

export default ProgressGraph;