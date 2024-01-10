// MyTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/display.css'
function Display() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       axios.get('/api/display')
       .then(response => setUsers(response.data))
       .catch(error => console.log(error))
    }, []);

    

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Display;
