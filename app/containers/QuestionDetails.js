import React, {Component} from 'react';
import { connect }        from 'react-redux';
import { withRouter }     from 'react-router-dom'
import Navbar             from '../components/Navbar';
import Question           from '../components/question-details/Question';
import SubmitAnswerForm   from '../components/question-details/SubmitAnswerForm';
import {
  createAnswer
} from '../actions/questions';

import './QuestionDetails.css';

class QuestionDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAnswerFormStatus: false
    };

    this.openCloseNewAnswerForm = this.openCloseNewAnswerForm.bind(this);
    this.submitNewAnswer        = this.submitNewAnswer.bind(this);
  }

  openCloseNewAnswerForm() {
    this.setState({
      newAnswerFormStatus: !this.state.newAnswerFormStatus
    })
  }

  submitNewAnswer(answer) {
    this.setState({
      newAnswerFormStatus: !this.state.newAnswerFormStatus
    });

    this.props.createAnswer(answer);
  }

  render () {
    const selectedQuestion = this.props.questions.find((question) => (
      question.id === this.props.match.params.id
    ));

    var newAnswerForm = null;

    if(this.state.newAnswerFormStatus) {
      newAnswerForm = <SubmitAnswerForm
        questionId={this.props.match.params.id}
        onSubmit={this.submitNewAnswer}
      />;
    }

    return (
      <div className='container'>
        <Navbar/>
        <Question
          question={selectedQuestion}
          onAnswerClick={this.openCloseNewAnswerForm}
          formStatus={this.state.newAnswerFormStatus}
        />
        {newAnswerForm}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => {
  return {
    createAnswer: (answer) => {
      dispatch(createAnswer(answer));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionDetails))
