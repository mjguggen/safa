import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from

const Routes = props => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
