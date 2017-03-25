import React, { Component } from 'react'

class Instruction extends Component {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
      </div>
    );
  }
}

export default Instruction