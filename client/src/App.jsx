import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userdata, setUserData] = useState([]);

  const createUserData = () => {
    Axios.post('http://localhost:8080/create_user', { name, phone, email });
  };

  useEffect(() => {
    Axios.get('http://localhost:8080/get_user').then((res) => {
      setUserData(res.data.data.userDetails);
    });
  }, []);

  return (
    <div className='container-fluid' class='create_user'>
      <div className='create_user m-3'>
        <br />
        <br />
        <h1>Create contact</h1>
        <br />
        <br />
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor='phone'>Phone: </label>
        <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <br />
        <button onClick={createUserData}>Create</button>
      </div>
      <div className='container-fluid'>
        <h1>User List</h1>
        <br />
        <br />
        {userdata.map((val, key) => {
          return (
            
            <div className='container_fuild' class='conatiner_fuild get_user'  key={key}>

              <table>
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tr>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td><button>update</button>
              <button>Delete</button></td>
              </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
