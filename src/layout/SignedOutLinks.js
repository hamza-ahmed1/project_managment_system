import React from 'react'
import { Link } from 'react-router-dom'

export default function SignedOutLinks() {
  return (
    <ul className='list-unstyled d-flex'>
    <li>
        <Link to={'/Signin'} className='btn btn-outline-light  mx-2 mt-2 btn-lg'>Login</Link>
    </li>
    <li>
   
        <Link to={'/Signup'} className='btn btn-outline-light mx-2 mt-2 btn-lg'>Signup</Link>
    </li>
    <li>
      
    </li>
</ul>
  )
}
