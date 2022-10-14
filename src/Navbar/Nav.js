import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <header>
      <nav className='navbar'>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/Kittys">Kittys</Link>
      </nav>
    </header>
  )
}

export default Nav