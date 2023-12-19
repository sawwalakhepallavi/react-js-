import React, { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item,handleClick}) => {
    const {title,image,price,description,rating,id}=item
    const[open,setOpen]=useState(false)
  return (
    <div className='card'>
        <Link to={`/about/${id}`}><img src={image} height={'200px'} width={'200px'} alt="" /></Link>
        <h5>{title}</h5>
        <p>{price}</p>
        <p><b>Rating</b>{rating.rate}⭐</p>
        <button onCanPlay={()=>handleClick(item)}>Add Cart</button>
        <button onClick={()=>setOpen(!open)}>Read More</button>
        {open && (
          <div>
            <p>{description}</p>
            <button onClick={()=>setOpen(!open)}>Close</button>
          </div>
        )}
    </div>
  )
}

export default Card