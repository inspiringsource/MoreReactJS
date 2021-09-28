import React, { Component } from 'react'

export default class FetchRandomPeople extends Component {
  state = {
    loading: true,
    people: [],
  }
  async componentDidMount() {
    const url = 'https://api.randomuser.me/?result=5'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ people: data.results, loading: false })
  }

  render() {
    return (
      <div>
        {this.state.people.map((person) => (
          <div key={person.login.uuid}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <div>{person.location.country}</div>
            <img alt="Profile" src={person.picture.large}></img>
          </div>
        ))}
      </div>
    )
  }
}
