import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Wrapper>
    <footer className="footer ">
        <div className="container">


    <ul className="nav ">
            <li className="nav__item"><a href="#" className="nav__link">About </a></li>
            <li className="nav__item"><a href="#" className="nav__link">Explore</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Careers</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Counselling sell</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Contact Us</a></li>
    </ul>
    <p className="copyright">
        &copy; Copyright 2022 by Rohan Shrestha.
    </p>
        </div>
</footer>
</Wrapper>
  )
}

const Wrapper = styled.main`
  .footer {
  background-image:linear-gradient(to right ,#ffffffb0,#bda77b);
  grid-column: full-start / full-end;
  clip-path: polygon(0 25%, 100% 0 , 100% 100%, 0 100%); 
  padding: 6rem; }


  
.nav {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  grid-gap: 1rem;
  align-items: center; }
  .nav__link:link, .nav__link:visited {
    font-size: 0.9rem;
    color: rgb(36, 33, 33);
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    transition: all .2s; }
  .nav__link:hover, .nav__link:active {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px); }

.copyright {
  font-size: 1.4rem;
  color: rgb(255, 251, 251);
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 70%; }

`