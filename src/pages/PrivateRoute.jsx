import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from './../hooks/Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/sign-in'} />
        )
      }
    />
  );
};

export default PrivateRoute;
