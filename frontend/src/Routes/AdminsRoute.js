import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

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
          : (<Redirect to="/home" />)
      )}
    />
  );
};

AdminsRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
