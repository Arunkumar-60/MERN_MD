import React, { useState } from "react";
import axios from "axios";
import './App.css'

function DeleteUser() {
    const [newUser ,setNewUser] = useState(0)

    const deleteUser = (id) => {
        Axios.delete(`http://localhost:8000/delete_user/${id}`)
    }

    return (
        <div className="container" class="container_fuild delete_user">
            <h1>User List</h1><br /><br />
            {
                newUser.map((val,key)=>{
                    return <div key={key} className="Users">
                        <p>{val.name}</p>
            <input type="text" placeholder="update name" onChange={(e) => { setNewName(e.target.value) }} />
            <p>{val.email}</p>
            <input type="text" placeholder="update email" onChange={(e) => { setNewEmail(e.target.value) }} />
            <p>{val.phone}</p>
            <input type="number" placeholder="Update Phone Number" onChange={(e) => { setNewPhone(e.target.value) }} />
            <button className="update-btn" onClick={()=>{updateUser(val._id)}}>Update</button>
            <button className="delet-btn" onClick={()=> {deleteUser(val._id)}}>delete</button>
                    </div>

                })
            }

        </div>
    )
}

export default DeleteUser