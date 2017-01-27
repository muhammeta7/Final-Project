// Import React
import React from 'react';
import { Component } from 'react';
import {render} from 'react-dom';

// Import Components
import DashboardNav from '../components/DashboardNav';
import ProgressChart from '../components/ProgressChart';

// Page Component
class Dashboard extends Component {
  render() {
    return (
    <div>
      <DashboardNav />
      <ProgressChart />
    </div>
    );
  }
};

export default Dashboard;