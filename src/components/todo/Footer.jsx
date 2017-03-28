import React from 'react'
import {Link} from '../router'

export const Footer = () => (
  <div className="row justify-content-center">
    <div className='btn-group'>
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Complete</Link>
    </div>
  </div>
)