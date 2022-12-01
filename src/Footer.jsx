import React from 'react'

const Footer = ({length}) => {
  return (
    <div className='footer-title'>{length} List {length === 1 ? "item" : "items"}
    </div>
  )
}

export default Footer