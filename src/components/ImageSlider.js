import React, { Component } from 'react'

export default class ImageSlider extends Component {
  state = {
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Helsinginkeskustailmakuva_04.JPG/220px-Helsinginkeskustailmakuva_04.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/182px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Fast-Paced_Streets_of_New_York_City.jpg/102px-Fast-Paced_Streets_of_New_York_City.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/220px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
      // source: Wikipedia
    ],
    idx: 0,
  }

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1,
    })
  }

  render() {
    return (
      <div>
        Image: {this.state.idx + 1} / 4
        <br />
        <img alt='Helsingi, Tokyo, New York, Paris'
          style={{ width: 250, height: 180 }}
          src={this.state.images[this.state.idx]}
        />
        <br />
        <button
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1,
            })
          }}
        >
          Previous
        </button>
        <button onClick={this.handleNext}>Next</button>
      </div>
    )
  }
}
