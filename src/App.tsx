import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import FunctionalComponent from './components/FunctionalComponent'
import FormComponent from './components/FormComponent'
import MainComponent from './components/MainComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Book from './types/Book'

function App() {
  const [books, setBooks] = useState<Book[]>([])

  // like componentDidMount
  useEffect(() => {
    const getBooks = async () => {
      try {
        let response = await fetch('https://striveschool-api.herokuapp.com/food-books')
        console.log(response)
        let data = (await response.json()) as Book[]
        console.log(data)
        setBooks(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBooks()
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <MainComponent title="Strive School" />
        <MainComponent title="Best school 3v3r" subTitle="this is true!" /> */}
          {/* every component by default just get an EMPTY OBJECT as the props */}
          <Route path="/" component={MainComponent} />

          {/* <FunctionalComponent title="Strive School" subTitle="Another string" /> */}
          {/* <FunctionalComponent title="Best school" /> */}

          <Route
            path="/form"
            render={(routerProps) => <FormComponent {...routerProps} user="Stefano" books={books} />}
          />
        </header>
      </div>
    </Router>
  )
}

export default App
