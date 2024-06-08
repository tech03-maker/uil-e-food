// import React from 'react'
import './Navbar.css'
import '../../index.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <img className='logo' src={logo} alt="" />
            <span>GOOD</span>FOOD
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar