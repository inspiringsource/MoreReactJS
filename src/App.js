import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'

function Body () {
  return(
  <div>
    <p>
      Edit <code>src/App.js</code> and save to rock.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
  );
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

export default App
