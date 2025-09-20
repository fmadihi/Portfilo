import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='homeContent'>
            <h1 className='myName'>
                Hi, I'm <span>Fatemeh Madihi</span>
            </h1>
            <h2 className='myJob'>
                Senior Frontend Developer & React Developer
            </h2>
            <p className='aboutMe'>
                I craft elegant digital solutions that blend innovative technology with thoughtful design. Passionate about creating meaningful user experiences that drive business success.
            </p>
        </div>
    </div>
  )
}

export default Home