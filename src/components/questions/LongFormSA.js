import React, { Component } from 'react'

class LongFormSA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState((prevState, props) => ({
      value
    }))
    this.props.onSelect(this.props.id, value)
  }

  render() {
    return (
      <div>
        <div>{this.props.question}</div>
        <div>
        <textarea rows="10" cols="30" value={this.state.value} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default LongFormSA
