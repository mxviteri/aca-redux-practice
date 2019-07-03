import React, { Component } from 'react'
import state from '../state'

class Pics extends Component {
  state = {
    pics: state.pics
  }

  addPic = () => {
    const newPics = [ ...this.state.pics ]
    newPics.push('new Pic')
    this.setState({
      pics: newPics
    })
  }

  render() {
    return (
      <div style={{ border: '5px dashed pink' }}>
        <p>these are the pics</p>
        <ul>
          {this.state.pics.map((pic, index) => {
            return (
              <li key={index}>{pic}</li>
            )
          })}
        </ul>
        <button onClick={this.addPic}>Click me</button>
      </div>
    )
  }
}

export default Pics