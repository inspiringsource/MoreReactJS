import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'
import Body, {Body2} from "./components/Body"
import Header from "./components/Header"
import Counter from './components/Counter'


function App() {


  return (
    <div className="App">
      <Header 
      title="You are Awesome" 
      num={1} 
      myObj={{ a: 2.5, b: 2 }}
      myArr={[1,2,3]}
      myFunc={(a, b)=>a+b}/>
      <Body 
      text="Hello"
      text2="Good-bye"/>
      <Body2 />
      <Counter initialCount={0}/>
      <Counter initialCount={25}/>
    </div>
  )
}

export default App
