import React, { Component } from 'react';
import 'whatwg-fetch'
import Quiz from './components/Quiz'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetch('/multiple-choice-quiz/quiz-sample-data.json')
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Quiz questions={this.state.questions} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
