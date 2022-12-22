import React from 'react'
import styled from 'styled-components'
function NewsLetter() {
    return <Wrapper>
    <div className="section-center">
      <h3>Join our newsletter and get 20% off</h3>
      <div className='content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur nemo cumque omnis incidunt sequi eum ut quae excepturi dolor.</p>
        <form className="contact-form" action="https://formspree.io/f/xzbowbgk" method='POST' >
          <input 
            type="email" 
            className='form-input' 
            name='_replyto'
            placeholder='enter email' />
            <button type='submit' className='submit-btn'>subscribe</button>
        </form>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.main`
 .section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 32em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 30vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #bda77b;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-white);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }

`
export default NewsLetter