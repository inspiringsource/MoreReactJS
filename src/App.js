import './App.css'
import React, { Component } from 'react'
import ImageSlider from './components/ImageSlider'
import Counter from './components/Counter'
import MyForm from './components/MyForm'

class App extends Component {
  state = {
    visible: true,
  }
  render() {
      return (
      <div className="App">
        <MyForm />
      </div>
    )
  }
}

export default App
