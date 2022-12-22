import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
export default function Header() {
  return (
    <Wrapper>
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
    <a href="#" className="btnn btn--white btn--animated">Register now</a>
</div>
    </header>
    </Wrapper>
  )
}


const Wrapper = styled.main`

.header{
  height: 95vh;
  background-image:linear-gradient(to right ,#ffffffb0,#bda77b), url('./assets/hero.png');
  background-size: cover;  
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0 , 100% 75%, 0 100%);
}


.header__logo-box{
  position: absolute;
  top: 4rem;
  left: 4rem;
}

.header__logo{
  height: 4.5rem;
}



.header__text-box{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;

}

.heading-primary{
  color: rgb(97, 87, 87);
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
  
}

.heading-primary--main{
  display: block;
  font-size: 5rem;
  font-weight: 400;
  letter-spacing: 1.5rem;
  animation-name: moveInLeft;
  animation-duration: 1s;
 animation-timing-function: ease-out;
 
  /* animation-iteration-count: 3; */

  /* animation-delay: 3s; */
}

.heading-primary--sub{
  display: block;
  font-size: 2rem;
  font-weight: 700px;
  letter-spacing: 1rem;
  animation-name: moveInRight;
  animation-duration: 1s;
}

@keyframes moveInLeft{
  0%{
      opacity: 0;
      transform: translateX(-10rem);

  }
80%{
  transform: translate(1rem);
}
  100%{
      opacity: 1;
      transform: translate(0);
  }
}

@keyframes moveInRight{
  0%{
      opacity: 0;
      transform: translateX(10rem);

  }
80%{
  transform: translate(-1rem);
}
  100%{
      opacity: 1;
      transform: translate(0);
  }
}

`