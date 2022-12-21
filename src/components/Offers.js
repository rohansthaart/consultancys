import React from 'react'
import styled from 'styled-components'

export default function Offers() {
  return (
    <Wrapper>
    <div className='offer'>
    <div className="offer__text-box">

         <h1 className='country-heading'>Limited Offer</h1>
         <p>We believe that Human has pursued the knowledge through education and travelling around the world and in universe. “GSC Private Limited” has envisaged the help and assistance required in this human pursuit and looks forward to providing guidance and information on global opportunities and reputed sources of required education across the world to the young knowledge seekers.

Our mission is to source internationally renowned academic institutions providing modern learning programs leading to bright international careers and guide, help and assist Indian students to gain easy access to such learning opportunities irrespective of gender, caste, creed or economic status.</p>
<a href="#" class="btnn btn--white btn--animated">Book Free counseling</a>
    </div>
</div>
</Wrapper>
  )
}

const Wrapper = styled.main`

.offer{
  height: 95vh;
  background-image:linear-gradient(to right ,#ffffffb0,#bda77b), url('../assets/school.png');
  background-size: cover;  
  background-position: top;
  position: relative;
  clip-path: polygon(0 25%, 100% 0 , 100% 75%, 0 100%); 

}

.offer__text-box{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}

.country-heading{
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;
}

.country-item{
  text-align: justify;
}
.country-item:hover{
 scale: 1.5;
}

`

