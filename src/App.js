import React, { Component } from 'react';
import 'whatwg-fetch'
import Quiz from './components/Quiz'
import './App.scss';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetch('/quiz-sample-data.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        const questions = json.questions.map(q => ({
          ...q,
          question: q.prompt
        }))
        this.setState((prevState, props) => ({
          questions: questions
        }))
      })
  }

  render() {
    return (
      <Quiz questions={this.state.questions} />
    );
  }
}

export default App;
