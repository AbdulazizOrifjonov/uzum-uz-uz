import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='container'>
        <h2>Email va Parolingizni kiriting</h2>
    <input type="text" />
    <input type="Password"  />
    <code>
        codni olish
    </code>
    <NavLink to={"/"}>Bosh saxifa</NavLink>

    </div>
  )
}

export default Login
