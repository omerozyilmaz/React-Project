import Header from './components/Header';
import Footer from './components/Footer';

import Main from './components/Main';
import SideBar from './components/SideBar';
import { useState } from 'react';
import './App.css';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//tüm kullanıcı listesini tutmak için bir state tanımlaman, bu state'e kayıt olan kullanıcıyı eklemek için addUser isimli bir fonksiyon yazman.
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newState = [...users, user];
    setUsers(newState);
  };

  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar users={users} />
        <Main users={users} addUser={addUser} />
      </div>
      <Footer />
    </>
  );
}

export default App;
