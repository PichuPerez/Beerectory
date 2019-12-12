import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <Link to="/">
        <h1 className="navbar-brand mx-auto">🍺 DIRECTORIO CERVECERO </h1>
      </Link>
    </nav>
  )
}

export default Navbar
