// import React from 'react'
import './Navbar.css'
import '../../index.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
  <div className="container">
    <a className="navbar-brand">
        <img className='logo' src={logo} alt="" />
    </a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn-nav" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar