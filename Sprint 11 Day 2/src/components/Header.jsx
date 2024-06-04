import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Header() {
  const { isUserLoggedIn, logOut } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logOut();
    history.push('/login');
  };

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {isUserLoggedIn ? (
            <>
              <button onClick={() => history.push('/friends')}>
                FRIENDS LIST
              </button>
              <button onClick={() => history.push('/friends/add')}>
                ADD FRIEND
              </button>
              <button onClick={handleLogout}>LOGOUT</button>
            </>
          ) : (
            <button onClick={() => history.push('/login')}>LOGIN</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
