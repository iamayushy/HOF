import React, { useState } from 'react'


export const Login = () => {
    const [email, setEmail] = useState('')
    function handleSubmit(event){
        event.preventDefault();
    }
    function handleChange(e){
        setEmail(e.target.email)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange = {handleChange}/>
            <input type="submit" value="Login"/>
        </form>
    </div>
  )
}
