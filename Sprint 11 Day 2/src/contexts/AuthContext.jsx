import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

// AuthContext oluşturulması
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const history = useHistory();

  const LSKey = 's11d2';
  const [loggedInUser, setLoggedInUser] = useLocalStorage(LSKey, {});
  const [apiError, setApiError] = useLocalStorage('apiErr', null);

  const isUserLoggedIn = loggedInUser.hasOwnProperty('token');

  const login = (loginInfo) => {
    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/login', loginInfo)
      .then((response) => {
        setLoggedInUser(response.data);
        setApiError(null);
        history.push('/friends');
      })
      .catch((error) => {
        console.log(error);
        setApiError(error);
      });
  };

  const logOut = () => {
    setLoggedInUser({});
    localStorage.removeItem(LSKey);
    history.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logOut,
        isUserLoggedIn,
        loggedInUser,
        apiError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
