import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from 'reactfire';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useUser();

  return (
    <Route
      {...rest} //redirects user to /login if not logged in
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute