import React from 'react'
import './App.css'
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent title="Strive School" />
        <MainComponent title="Best school 3v3r" subTitle="this is true!" />
        {/* every component by default just get an EMPTY OBJECT as the props */}
      </header>
    </div>
  )
}

export default App
