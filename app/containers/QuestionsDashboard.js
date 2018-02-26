import React, {Component} from 'react';
import { connect }        from 'react-redux';
import QuestionDetails    from '../components/questions-dashboard/QuestionDetails';
import QuestionsList      from '../components/questions-dashboard/QuestionsList';
import LackOfQuestions    from '../components/questions-dashboard/LackOfQuestions';
import Navbar             from '../components/Navbar';
import {
  fetchQuestionsBatch,
  selectQuestion
} from '../actions/questionsDashboard';

class QuestionsDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchQuestionsBatch();
  }

  render () {
    const result = this.props.selectedQuestion ?
      this.renderQuestionsList() : this.renderEmptyResult();

    return (
      <div>
        {result}
      </div>
    )
  }

  renderQuestionsList() {
    return (
      <div id='layout' className='content pure-g'>
        <Navbar/>
        <QuestionsList
          selectedQuestionId={this.props.selectedQuestion.id}
          questions={this.props.questions}
          selectQuestion={this.props.selectQuestion}
        />
        <QuestionDetails
          question={this.props.selectedQuestion}
        />
      </div>
    )
  }

  renderEmptyResult() {
    return (
      <div id='layout' className='content pure-g'>
        <Navbar/>
        <LackOfQuestions/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions:        state.questions,
  selectedQuestion: state.selectedQuestion
});

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestionsBatch: () => {
      dispatch(fetchQuestionsBatch());
    },
    selectQuestion: (questionId) => {
      dispatch(selectQuestion(questionId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDashboard);
