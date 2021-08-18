import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent'
import FormComponent from './components/FormComponent'
// import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MainComponent title="Strive School" />
        <MainComponent title="Best school 3v3r" subTitle="this is true!" /> */}
        {/* every component by default just get an EMPTY OBJECT as the props */}

        <FormComponent />

        <FunctionalComponent title="Strive School" subTitle="Another string" />
        <FunctionalComponent title="Best school" />
      </header>
    </div>
  )
}

export default App
