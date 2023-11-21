import React from 'react'

export default function Footer({number, handleClick}) {
    
  return (
    <div className='p-5 bg-primary display-4'>{number*2}
    <br/>
    <button onClick={handleClick} className='btn btn-success'>Reset</button></div>
  )
}
