import React from 'react'
import CollegeCard from './CollegeCard'
import {universities} from '../data'
export default function College() {
   
  return (
  
            <div className='container'>    
                <h1 className='section-heading'>University Updates</h1>
                <div className="row">

                {universities.map((un)=>{
                   const {id} = un
                   return(  
                   <div className="col" key={id}>
                    <CollegeCard {...un}/>
                   </div>
                   )
                })}
                
              
  </div>
 </div>

  )
}
