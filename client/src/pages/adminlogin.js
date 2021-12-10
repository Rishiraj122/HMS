import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

const AdminLogin = () =>{
    const history = useHistory();
    const logout=()=>{
        window.localStorage.clear();
        window.location.href='/login'
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            const user = jwt.decode(token)
            history.push('/login');
        }
      })

    return (
        <div>
            <h1>This is the admin page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default AdminLogin