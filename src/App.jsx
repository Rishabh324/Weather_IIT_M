import React from 'react'
import Left from './components/Left'
import './App.css'
import Right from './components/Right'
import BKG from './assets/left-bkg.jpg'

const App = () => {
  return (
    <div className='App'>
      <div className='left-cont'>
        <Left />
      </div>
      <div className='right-cont' style={{ backgroundImage: `url(${BKG})` }}>
        <Right />
      </div>
    </div>
  )
}

export default App