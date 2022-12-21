import React from 'react'
import logo from '../assets/logo.svg'
export default function Header() {
  return (
    <header className='header'>
        <nav className="navbar navbar-expand-lg navbar-light  " style={{backgroundColor: "#d1cda6b0"}}>
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} className='header__logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Scholarship</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Career Counseling</a></li>
            <li><a className="dropdown-item" href="#">Visa Counseling</a></li>
            <li><a className="dropdown-item" href="#">Internship Programs</a></li>
            <li><a className="dropdown-item" href="#">Study Abroad</a></li>
            <li><a className="dropdown-item" href="#">University Visit</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Student Support +</a></li>
          </ul>
        </li>
        <li className="nav-item">
            <a href="" className="nav-link">About Us</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

<div className="header__text-box">
    <h1 className='heading-primary'>
        
        <span className="heading-primary--main">Study abroad</span>
        <span className="heading-primary--sub">Work while you study</span>
    </h1>
    <a href="#" class="btnn btn--white btn--animated">Register now</a>
</div>
    </header>
  )
}
