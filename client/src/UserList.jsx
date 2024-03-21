import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/get_user').then((res) => {
      setUserData(res.data.data.userDetails);
    });
  }, []);

  return (
    <div className='container_fluid'>
      <h1>User List</h1>
      <br />
      <br />
      {userData.map((val, key) => {
        return (
          <div key={key}>
            <p>{val.name}</p>
            <p>{val.email}</p>
            <p>{val.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
