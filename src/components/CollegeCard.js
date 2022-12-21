import React from 'react'

export default function CollegeCard() {
  return (
    
    <div className="col">
    <div className="card" style={{width:"400px"}}>
        <img src='https://www.utoronto.ca/sites/default/files/vlcsnap-2021-10-25-11h27m42s786-crop.jpg' alt="" />
        <div className="card-body">
            <h4 className="card-title">
                University of Toranto
            </h4>
            <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
        </div>
    </div>
    </div>
   
  )
}


