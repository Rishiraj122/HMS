import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

const WardenLogin = () =>{
    const history = useHistory();//history instance a react hook
    const logout=()=>{
        window.localStorage.clear();//to clear the localstorage of the user, so when 
        //a user logsout it's login local storage is cleared
        window.location.href='/login'
    }

    useEffect(() => { //useEffect react hook to tell React that 
        //components need to do something on render
        const token = localStorage.getItem('token');
        if(!token) {
            const user = jwt.decode(token) // for authentication
            history.push('/login'); //if authentication fails load the login page
        }
      })

    return (
        <div>
            <h1>This is the warden page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default WardenLogin