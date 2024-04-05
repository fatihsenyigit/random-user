
import React from 'react'
import logo from '../assets/cw.svg'
import '../sass/header.scss'

function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} alt="logo" />
      </div>
      <ul className='header-ul'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header