import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Countdown } from 'views/Countdown';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Countdown} />
    </Switch>
  </Router>
);
