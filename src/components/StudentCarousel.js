import React,{useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './StudentCarousel.css'
import data from '../data';
export default function StudentCarousel() {
    const [reviews,setReviews] = useState(data);
    const [index,setIndex] = useState(0);
  
    useEffect(()=>{ 
      const lastIndex = reviews.length-1;
      if(index<0){
        setIndex(lastIndex)
      }
      if(index>lastIndex){
        setIndex(0)
      }
  
    },[index,reviews])
  
    useEffect(()=>{
      let slider = setInterval(()=>{
        setIndex(index+1)
      },3000)
      return()=>clearInterval(slider)
    },[index])
  
  return <section className="section">
    <div className="section-heading">
      <h2>
        <span>What Students Say</span>
      </h2>
    </div>
    <div className="section-center" >
      {reviews.map((review,reviewIndex)=>{
        const {id,image,name,title,quote} = review;
        let position = 'nextSlide';
        if(reviewIndex === index){
          position = 'activeSlide';
        }
        if(reviewIndex === index-1 || (index=== 0 && reviewIndex===review.length-1)){
          position='lastSlide'
        }
        return <article key={id} className={position}>
          <img src={image} alt={name} className='person-img' />
          <h4>{name}</h4>
          <p className='title'>{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })}
      <button className='prev' onClick={()=>setIndex(index-1)}><FiChevronLeft/></button>
      <button className='next' onClick={()=>setIndex(index+1)}><FiChevronRight/></button>
    </div>
  </section>
}
