import React from 'react'

export default class MyForm extends React.Component {
  state = {
    name: 'Name',
    favoritePet: 'Pet name',
    rememberMe: false,
    title: 'Miss.',
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox'
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input size="20"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <textarea cols="26"
            name="favoritePet"
            value={this.state.favoritePet}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div>
          <input
            name="rememberMe"
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
          />{' '}
          &nbsp;&nbsp;&nbsp;
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Rock </option>
            <option>paper </option>
            <option>scissors </option>
          </select>
        </div>
        <br />
        <button type="submit">submit</button>
      </form>
    )
  }
}
