import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { RouteWrapper } from 'views/.components/RouteWrapper';

import { Layout } from 'views/.components/Layout';

import { Countdown } from 'views/Countdown';

export const App = () => (
  <Router>
    <Switch>
      <RouteWrapper exact path="/" component={Countdown} layout={Layout} />
    </Switch>
  </Router>
);
