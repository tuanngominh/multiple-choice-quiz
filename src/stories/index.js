import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import MultipleChoices from '../components/MultipleChoices'

storiesOf('Multiple Choice', module)
  .add('', () => {
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
  });