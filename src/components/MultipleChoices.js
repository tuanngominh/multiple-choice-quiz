import React, { Component } from 'react'

class MultipleChoicesItem extends Component {
  handleSelect = () => {
    this.props.onSelect(this.props.questionId, this.props.id)
  }

  render() {
    return <div><input
      type="radio"
      onClick={this.handleSelect}
      value={this.props.id}
      name={this.props.name}
    />{this.props.value}</div>
  }
}

class MultipleChoices extends Component {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
        <div>{this.props.options.map(
          option =>
          <MultipleChoicesItem
            key={option.id}
            {...option}
            onSelect={this.props.onSelect}
            questionId={this.props.id}
            name={`${this.props.type}-${this.props.id}`}
          />
        )}
        </div>
      </div>
    );
  }
}

export default MultipleChoices
