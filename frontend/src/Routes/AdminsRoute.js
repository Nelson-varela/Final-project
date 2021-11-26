import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogReportsScreen } from '../components/track-login-logout/LogReportsScreen';
import { CreateUser } from '../components/auth/CreateUser';
import LogsByUser from '../components/track-login-logout/LogsByUser';

export var AdminsRoute = function ({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <Route
      {...rest}
      component={(props) => (
        (isAuthenticated && user.result.roll === 'Administrador')
          ? <Component {...props} />
          : (<BrowserRouter>
            <Switch>
              <Route exact path="/report/:userId" component={ LogsByUser} />
              <Route exact path='/reportelog' component={LogReportsScreen}  />
              <Route exact path='/usuario/crear' component={CreateUser}  />
            </Switch>
            </BrowserRouter>)
      )}
    />
  );
};

AdminsRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
