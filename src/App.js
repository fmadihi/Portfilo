import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './pages/header/Header'
import Main from './pages/main/Main'

function App () {
  return (
    <BrowserRouter>
      <Header className="flex flex-row-reverse flex-nowrap justify-evenly items-center bg-red-200" />
      <Main />
      {/* <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div> */}
    </BrowserRouter>
  )
}

export default App
