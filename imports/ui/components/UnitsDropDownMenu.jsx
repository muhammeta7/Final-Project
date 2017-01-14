// Import React
import React from 'react';
import { Component } from 'react';

// Import Material-ui 
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';


class UnitsDropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  _selectFieldChange(event, index, value){
    this.setState({value})
    console.log(value)   
  }

  render(){
    return(
      <SelectField value={this.state.value} onChange={this._selectFieldChange.bind(this)} autoWidth={true} fullWidth={true}>
        <MenuItem value={1} primaryText="lb" />
        <MenuItem value={2} primaryText="kg" />
        <MenuItem value={3} primaryText="body weight" />
      </SelectField>
    )
  }
}


export default UnitsDropDownMenu;