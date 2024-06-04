import './index.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import AuthContextProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute path="/" exact component={FriendsList} />
          <PrivateRoute path="/friends" exact component={FriendsList} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
