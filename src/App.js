import React from 'react';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

function App() {

  return (
    <div>
      <Hdr />
      <AddUser />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
