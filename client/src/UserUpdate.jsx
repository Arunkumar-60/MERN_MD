import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function UpdateUser({ userDetails }) {
  const [newName, setNewName]=useState('');
  const [newEmail, setNewEmail]=useState('');
  const [newPhone, setNewPhone]=useState(0);

  const updateUser = (id) => {
    Axios.put(`http://localhost:8080/update_user/${id}`, { newName,newEmail,newPhone });
  };

  return (
    <div className='container-fluid update_user'>
      {
        userDetails.map((val, key) => (
          <div key={key} className='new_user'>
            <p>{val.name}</p>
            <input type="text" placeholder="update name" onChange={(e) => { setNewName(e.target.value) }} />
            <p>{val.email}</p>
            <input type="text" placeholder="update email" onChange={(e) => { setNewEmail(e.target.value) }} />
            <p>{val.phone}</p>
            <input type="number" placeholder="Update Phone Number" onChange={(e) => { setNewPhone(e.target.value) }} />
            <button className="update-btn" onClick={() => { updateUser(val._id) }}>Update</button>
          </div>
        ))
      }
    </div>
  );
}

export default UpdateUser;
