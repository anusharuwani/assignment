import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CsHeader } from '../components';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <CsHeader />
        <Component {...props} />
      </div>
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
