import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const createUserData = () => {
    Axios.post('http://localhost:8080/create_user', { name, phone, email });
  };

  return (
    <div className='container_fluid create_user' class='m-3'>
      <br />
      <br />
      <h1>Create contact</h1>
      <br />
      <br />
      <label htmlFor=''>Name: </label>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <label htmlFor=''>Email: </label>
      <input type='email' onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <label htmlFor=''>Phone: </label>
      <input type='number' onChange={(e) => setPhone(e.target.value)} />
      <br />
      <br />
      <button onClick={createUserData}>create</button>
    </div>
  );
}

export default CreateUser;
