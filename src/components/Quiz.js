import React, { Component } from 'react'

import MultipleChoices from './questions/MultipleChoices'
import FillInTheBlank from './questions/FillInTheBlank'
import LongFormSA from './questions/LongFormSA'
import Instruction from './questions/Instruction'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  renderQuestion = (question) => {
    switch(question.type) {
      case 'multiple_choice':
        return <MultipleChoices {...question} />
      case 'fill_in_the_blank':
        return <FillInTheBlank {...question} />
      case 'essay':
        return <LongFormSA {...question} />
      case 'instruction':
        return <Instruction {...question} />
      default:
        return <div>Unknown question type</div>
    }
  }

  render() {
    return (
      <div>
        {this.props.questions.map(question => this.renderQuestion(question))}
      </div>
    );
  }
}

export default Quiz
