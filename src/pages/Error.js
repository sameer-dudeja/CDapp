import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
      <br />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <br />

      <Link to='/' className='btn1'>
        Back Home
      </Link>
    </div>
  )
}

export default Error
