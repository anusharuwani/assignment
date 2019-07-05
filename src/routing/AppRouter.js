import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import OpenRoute from './PrivateRoute';

// Import Pages
import QuestionsPage from '../pages/QuestionsPage';

export const history = createHistory();

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <OpenRoute path="/" component={QuestionsPage} exact />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
