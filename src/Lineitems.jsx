import React from 'react'
import  { FaTrashAlt } from 'react-icons/fa'

const Lineitems = ({item,handleCheck,handleDelete}) => {
  return (
    <li   className='item'>
        <input 
          type="checkbox"
          onChange={()=> handleCheck(item.id)}
          checked={item.checked}
          id= {item.id}
        />
        <label style={(item.checked) ? { textDecoration:'line-through'}: null} htmlFor={item.id} >{item.item}</label>
        <FaTrashAlt onClick={() =>  handleDelete(item.id)} role="button" tabIndex="0" aria-label={`Delete ${item.item}`} />
      </li>
  )
}

export default Lineitems