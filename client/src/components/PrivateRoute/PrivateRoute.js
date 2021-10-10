import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { persistUserAction } from '../../redux/actions/userActions';

export default function PrivateRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const token = localStorage.getItem('token');
  if (!userState.status && token) dispatch(persistUserAction());
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
