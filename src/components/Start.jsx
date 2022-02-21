import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Start = () => {
  return (
    <div>
        <h1>Deno School</h1>
      <Link className='login' to = "/login">Login</Link>
      <Link className='sign'  to = "/pre">SignUP</Link>
      <Outlet/>
    </div>
  )
}
