import React from 'react'
import './Home.css'

function Home () {
  return (
    <div className='home'>
      <div className='homeContent'>
        <h1 className='myName' style={{ fontSize: '72px', color: '#fff' }}>
          Hi, I'm <span style={{ color: '#D8B4FE' }}>Fatemeh Madihi</span>
        </h1>
        <h2 className='myJob'>Senior Frontend Developer & React Developer</h2>
        <p className='aboutMe'>
          I craft elegant digital solutions that blend innovative technology
          with thoughtful design. Passionate about creating meaningful user
          experiences that drive business success.
        </p>
      </div>

      <div class='btnGroup'>
        <button class='BTN ExplorBTN'>
          <i class='ri-folder-line mr-3'></i>Explore My Work
        </button>
        <button class='BTN ConnectBTN'>
          <i class='ri-chat-3-line mr-3'></i>Let's Connect
        </button>
      </div>
    </div>
  )
}

export default Home
