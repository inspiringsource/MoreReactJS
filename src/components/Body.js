import React from 'react'


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

  export const Body2 = () => (
      <div>
          <div>Hi</div>
      </div>
  )

  export default Body;