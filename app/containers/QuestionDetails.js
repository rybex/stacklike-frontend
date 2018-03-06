import React, {Component} from 'react';
import { connect }        from 'react-redux';
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

  componentWillMount() {
    if(this.props.questions.length == 0) {
      this.props.history.push('/');
    }
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

    return (
      <div className='container'>
        <Navbar
          user={this.props.user}
        />
       { selectedQuestion ? <Question
          question={selectedQuestion}
          onAnswerClick={this.openCloseNewAnswerForm}
          formStatus={this.state.newAnswerFormStatus}
          user={this.props.user}
        /> : null }
        {this.state.newAnswerFormStatus ? <SubmitAnswerForm
          questionId={this.props.match.params.id}
          onSubmit={this.submitNewAnswer}
        /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.list,
  user:      state.users
});

const mapDispatchToProps = dispatch => {
  return {
    createAnswer: (answer) => {
      dispatch(createAnswer(answer));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
