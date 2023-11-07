import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

function App() {

  const [usersList, setUsers] = useState([{
    id: 'Canon',
    img: 'data:image/jpeg;base64,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',
    name: 'Canon',
    age: '21',
    major: 'English'
  }]);
  const [userData, setUserData] = useState({
    age: ' ',
    name: ' ',
    img: ' ',
    major: ' '
  })

  function usernameEnteredHandler(event) {
    setUserData (prevData => ({
      name: event.target.value,
      age: prevData.age,
      img: prevData.img,
      major: prevData.major
    }))
  }

  function ageEnteredHandler(event) {
    setUserData (prevData => ({
      name: prevData.name,
      age: event.target.value,
      img: prevData.img,
      major: prevData.major
    }))
  }

  function imgEnteredHandler(event) {
    setUserData (prevData => ({
      name: prevData.name,
      age: prevData.age,
      img: event.target.value,
      major: prevData.major
    }))
  }

  function majorEnteredHandler(event) {
    setUserData (prevData => ({
      name: prevData.name,
      age: prevData.age,
      img: prevData.img,
      major: event.target.value
    }))
  }

  function buttonClickedHandler(event) {
    event.preventDefault();
    setUsers (
      [...usersList,
      { id: userData.name, img: userData.img, name: userData.name, age: userData.age, major: userData.major }
      ])
  }

  
  return (
    <div>
      <Hdr />
      <AddUser onUsernameChange={usernameEnteredHandler} onAgeChange={ageEnteredHandler} onImgChange={imgEnteredHandler} onMajorChange={majorEnteredHandler} onClick={buttonClickedHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
