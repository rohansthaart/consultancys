import React from 'react'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className='header'>
        <div class="header__logo-box">
                <img src={logo} alt="Natours" class="header__logo"/>
           </div>
    </div>
  )
}
