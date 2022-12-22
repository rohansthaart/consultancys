import React from 'react'
import styled from 'styled-components'
export default function CollegeCard({name,image,about}) {
  return (
    <Wrapper>
   
    <div className="card">
        <img src={image} alt="" />
        <div className="card-body">
            <h4 className="card-title">
                {name}
            </h4>
            <p className="card-text">{about}</p>
    <a href="#" className="btn btn-primary">Visit College</a>
        </div>
    </div>
    
    </Wrapper>
  )
}

const Wrapper = styled.main`
    .btn-primary{
        width: 100%;
    background-color: #bda77b;
    border: none;
    }
.card{
    width: 350px;

}
`

