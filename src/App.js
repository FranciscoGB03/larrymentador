import React from 'react';
import ROUTES from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {ROUTES.map((route, idx) =>
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              component={route.component} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
