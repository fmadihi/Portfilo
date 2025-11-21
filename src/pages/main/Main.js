import React from 'react'
import './Main.css'
import BackImg from './components/backImage/BackImg'
import Experience from './components/experience/Experience'
function Main() {
  return (
    <div style={{width:'100%'}} className='mainC'>
        <BackImg />
        <Experience />
    </div>
  )
}

export default Main