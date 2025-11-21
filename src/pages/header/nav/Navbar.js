import React from 'react'
import './Navbar.css'
import '../../../components/assets/css/style.css'

function Navbar() {
  return (
    <ul className='flex navbar'>
        <li className='liNav'>Home</li>
        <li className='liNav'>About</li>
        <li className='liNav'>Skills</li>
        <li className='liNav'>Portfolio</li>
        <li className='liNav'>Experience</li>
        <li className='liNav'>Contact</li>
    </ul>
  )
}

export default Navbar