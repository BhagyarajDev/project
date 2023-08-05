import React from 'react'
import './signup.css'

function signup() {
  return (
    <div>
        <h1 className='logo'> Login</h1><br/>
        <label>first name</label>
        <input type="text" placeholder='first name' /><br/>
        <label>last name</label>
        <input type="text" placeholder='last name' /><br/>
        <label>email</label>
        <input type="text" placeholder='Email' /><br/>
        <label>password</label>
        <input type="text" placeholder='password' /><br/>
        <button className='button'> sign up</button>
    </div>
  )
}

export default signup