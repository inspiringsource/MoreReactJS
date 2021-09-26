import './App.css'
import React, { Component } from 'react'
import ImageSlider from './components/ImageSlider'
import Counter from './components/Counter'

class App extends Component {
  state = {
    visible: true,
  }
  render() {
    const buttonText = this.state.visible ? 'hide' : 'show'
    const slider = this.state.visible ? (
      <ImageSlider />
    ) : (
      <div>
        <Counter initialCount={0} />
      </div>
    )
    return (
      <div className="App">
        <div className={this.state.visible ? 'visible' : 'hidden'}>
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible })
          }}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default App
