import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
	const history = useHistory()

	const logout=()=>{
        window.localStorage.clear();
        window.location.href='/login'
    }


	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				history.replace('/login')
			} 
		}
		else{
			history.push('/login')
		}
	}, [])

	
	return (
		<div>
			<h1>This is the student Dashboard</h1>
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Dashboard
