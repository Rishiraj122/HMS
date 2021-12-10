import React from 'react'

function App(){

    const logout=()=>{
        window.localStorage.clear();
        window.location.href='/login'
    }
    return(
        <button onClick={logout}>Logout</button>
    )

}

export default App