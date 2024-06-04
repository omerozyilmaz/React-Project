import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isUserLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
