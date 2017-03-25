import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import MultipleChoices from '../components/questions/MultipleChoices'
import FillInTheBlank from '../components/questions/FillInTheBlank'
import LongFormSA from '../components/questions/LongFormSA'
import Instruction from '../components/questions/Instruction'

storiesOf('Multiple choice quiz', module)
  .add('MultipleChoices', () => {
    const props = {
      onSelect: action("onSelect"),
      "id": 1,
      question: "What color is the sky?",
      options: [
        {
        "id": "a",
        "value": "red"
        },
        {
        "id": "b",
        "value": "blue"
        },
        {
        "id": "c",
        "value": "green"
        }
      ]
    }
    return (
      <MultipleChoices {...props} />
    )
  })
  .add('FillInTheBlank', () => {
    const props = {
      onSelect: action("onSelect"),
      "id": 2,
      question: "What is 2 + 2"
    }
    return (
      <FillInTheBlank {...props} />
    )
  })
  .add('LongFormSA', () => {
    const props = {
      onSelect: action("onSelect"),
      "id": 3,
      question: "How can we fix healthcare"
    }
    return (
      <LongFormSA {...props} />
    )
  })
  .add('Instruction', () => {
    const props = {
      "id": 5,
      question: "Login to the server application on https://localhost:38"
    }
    return (
      <Instruction {...props} />
    )
  })
  ;