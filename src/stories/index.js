import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import MultipleChoices from '../components/MultipleChoices'
import FillInTheBlank from '../components/FillInTheBlank'

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
  ;