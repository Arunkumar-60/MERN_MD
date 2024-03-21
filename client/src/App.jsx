import React from 'react'
import Axios from 'axios'
import './App.css'
import CreateUser from './CreateUser';
import UserList from './UserList';
import DeleteUser from './DeleteUser';


function App(){
  return (
    <div>
      <UserList/>
      <CreateUser/>
    </div>
  )
}

export default App;