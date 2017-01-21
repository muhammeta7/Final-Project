// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';
import {Chart} from 'react-google-charts';

// Page Component
class Dashboard extends Component {
  render() {
    return (
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
    );
  }
};

export default Dashboard;