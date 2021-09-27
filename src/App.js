import './App.css'
import React, { Component } from 'react'
import FetchRandomPeople from './components/FetchRandomPeople'

class App extends Component {
  state = {
    visible: true,
  }
  render() {
      return (
      <div className="App">
          <FetchRandomPeople />
      </div>
    )
  }
}

export default App
