import React from 'react'
import { Link } from 'react-router-dom'

export default function SignedInLinks() {
  return (
    <ul className='list-unstyled d-flex'>
 
        <li>
            <Link to={'/'} className='btn btn-outline-light mx-2 mt-2 btn-lg'>Logout</Link>
        </li>
        <li>
            <Link to={'/createproject'} className='btn btn-outline-light  mx-2 mt-2 btn-lg'>New Project</Link>
        </li>
    </ul>
  )
}
