import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'

function Body(props) {
  return (
    <div>
    <p className="App-intro">
      {props.text}<br/> 
      {props.text2}
    </p>
    </div>
  )
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> {this.props.title}</h1>
        <div>
          Number =
          {this.props.num}
          <br/>Object b =
          {this.props.myObj.b}
          <br/>My Array [2]= 
          {this.props.myArr[2]}
          <br/>My Function a+b= 
          {this.props.myFunc(10, 12)}
        </div>
      </header>
    )
  }
}

function App() {


  return (
    <div className="App">
      <Header 
      title="You are cool" 
      num={1} 
      myObj={{ a: 2.5, b: 2 }}
      myArr={[1,2,3]}
      myFunc={(a, b)=>a+b}/>
      <Body 
      text="Hello"
      text2="Good-bye"/>
    </div>
  )
}

export default App
