import React from 'react'
import Itemlist from './Itemlist'

const Content = ({items,handleCheck,handleDelete}) => {  
  return (
    <div className='content--box'>
      { items.length ? ( 
         <Itemlist items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      ):(
        <p style={{marginTop:'2rem',marginLeft:'8.5rem'}}>Your list is empty!</p>
      )}
    </div>
  )
}

export default Content