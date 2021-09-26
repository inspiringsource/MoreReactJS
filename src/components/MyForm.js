import React, { Component } from 'react'

export default class MyForm extends Component {
  state = {
    name: 'Your name',
    petname: 'Pet Name',
    remember: false,
    yourmove: 'Roshambo',
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleChangePet = (event) => {
    this.setState({ name: event.target.value })
  }
  handleChangeBox = (event) => {
    this.setState({ remember: event.target.checked })
  }
  handleSelect = (event) => {
    this.setState({ yourmove: event.target.value })
  }

  handleSubmit = (event) => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea value={this.state.petname} onChange={this.handleChangePet} />
        <input
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChangeBox}
        />
        <div>
          <select value={this.state.yourmove} onChange={this.handleSelect}>
            <option>Rock </option>
            <option>paper </option>
            <option>scissors </option>
          </select>
        </div>
        <button onClick={this.handleSubmit}> submit</button>
      </div>
    )
  }
}
