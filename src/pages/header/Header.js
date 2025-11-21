import React from 'react'
import Logo from './components/Logo'
import './Header.css'
import Navbar from './nav/Navbar'
import TalkBtn from './talkBtn/TalkBtn'

function Header(props) {
  return (
    <div className="header">
        <Logo />
        <Navbar />
        <TalkBtn />
    </div>
  )
}

export default Header