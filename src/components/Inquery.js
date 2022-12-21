
import React,{useState} from 'react'

import styled from 'styled-components'

export default function Inquery() {
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    const SubmitForm =(e)=>{
        e.preventDefault()
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=${subject}&body=${message}&bcc=someone.else@example.com`, "_blank")
        setSubject('')
        setMessage('')
    }
  return (
    <Wrapper>
    <div className='offer'>
    <div className="offer__text-box">

         <h1 className='country-heading'>Inquery</h1>
        <form>
            <input type="text" placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/><br/>
            <textarea placeholder='Your Query' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        </form>
            <button className="btn btn-primary" onClick={SubmitForm}>Submit</button>

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
input{
    width: 100%;
    padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

`

