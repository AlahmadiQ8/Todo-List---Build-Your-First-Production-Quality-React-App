import React from 'react'
import {Link} from '../router'

export const Footer = () => (
  <div className="row justify-content-center">
    <div className='btn-group'>
      <Link filter='' to='/'>All</Link>
      <Link filter='ACTIVE' to='/active'>Active</Link>
      <Link filter='COMPLETE' to='/complete'>Complete</Link>
    </div>
  </div>
)