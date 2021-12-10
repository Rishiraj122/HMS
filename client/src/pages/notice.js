import React, {useState} from 'react'

function Notice () {

    const [name,setName] = useState('')
    const [notice,setNotice] = useState('')

    const noticePage = () =>{
        window.location.href='/notice';
    }

    async function publishNotice(event){
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/notice',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name,
                notice,
            }),
        })
        const data=await response.json()
        if (data.status === 'ok') {
            alert('Notice Published')
		}
    }

    return(
        <div>
            <h1>HOSTEL WARD</h1>
            <form onSubmit={publishNotice}>
                <input
					value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="name"
				/>
				<br />
				<input
					value={notice}
                    onChange ={(e) => setNotice(e.target.value)}
                    type="text"
                    placeholder="notice"
				/>
				<br />
				<input type="submit" value="publish" />
			</form>
      <button onClick={noticePage}>Publish</button>
        </div>
    )
}

export default Notice