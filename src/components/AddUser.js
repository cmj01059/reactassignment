import React from 'react';

import './AddUser.css';
import Button from './Button';
import Card from './Card';

const AddUser = (props) => {
  return (
    <Card className="input">
      <form onSubmit={props.onClick}>
        <label>Username</label>
        <input
          id="username"
          type="text"
          onChange={props.onUsernameChange}
        />
        <label>Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={props.onAgeChange}
        />
        <label>Link to image</label>
         <input
          id="img"
          type="text"
          onChange={props.onImgChange}
        />
        <label>Major</label>
         <input
          id="major"
          type="text"
          onChange={props.onMajorChange}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
