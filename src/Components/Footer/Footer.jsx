import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentyear = new Date().getFullYear()
  return (
    <div className='footer'>
      <p>© {currentyear} Edusity. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
