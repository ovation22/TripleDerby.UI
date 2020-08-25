import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Race from '../pages/Race';
import routes from '../constants/routes';

function Router() {
  return (
    <Switch>
      <Route path={routes.root.path} exact component={Home} />
      <Route path={routes.race.path} exact component={Race} />
      {/* Render component given un-found route */}
      <Route component={Home} />
    </Switch>
  );
}

export default Router;
