import './App.css'
import React, { Component } from 'react'
import ToDoList from './components/ToDoList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    )
  }
}

export default App

// In progress:
// https://youtu.be/I6IY2TqnPDA?t=646