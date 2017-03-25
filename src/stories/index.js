import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import MultipleChoices from '../components/MultipleChoices'

storiesOf('Multiple Choice', module)
  .add('', () => (
    <MultipleChoices />
  ));