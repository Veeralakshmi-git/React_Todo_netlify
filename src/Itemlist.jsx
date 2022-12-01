import React from 'react'
import Lineitems from './Lineitems'

const Itemlist = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map(item => (
      <Lineitems key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
    ))}  
  </ul>
  )
}

export default Itemlist