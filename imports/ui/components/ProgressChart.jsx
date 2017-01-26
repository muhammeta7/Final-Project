// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';
import Blaze from 'meteor/gadicc:blaze-react-component';


// Import Material-ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

// Create Component
class ProgressChart extends Component {
  
  render(){
    return(
      <Card>
        <CardHeader>
          <div>
            <Blaze template="myTemplate" />
          </div>
        </CardHeader>
      </Card>
    )
  }
}



export default ProgressChart;