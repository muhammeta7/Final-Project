import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

// add render routes function
import { renderRoutes } from '../imports/startup/client/routes.jsx'

// render routes after DOM has loaded
Meteor.startup(() => {
  render(<h1>Test</h1>, document.getElementById('app'));
});