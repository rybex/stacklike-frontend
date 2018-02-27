import React, {Component} from 'react';
import { connect }        from 'react-redux';
import QuestionDetails    from '../components/questions-dashboard/QuestionDetails';
import QuestionsList      from '../components/questions-dashboard/QuestionsList';
import Navbar             from '../components/Navbar';
import SearchBox          from '../components/questions-dashboard/SearchBox';
import AskQuestionButton  from '../components/questions-dashboard/AskQuestionButton';
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
      this.renderEmptyResult() : this.renderQuestionsList();

    return (
      <div>
        {result}
      </div>
    )
  }

  renderQuestionsList() {
    return (
      <div className='container'>
        <Navbar/>
        <SearchBox/>
        <AskQuestionButton/>
        <QuestionsList
          questions={this.props.questions}
          selectQuestion={this.props.selectQuestion}
        />
      </div>
    )
  }

  renderEmptyResult() {
    return (
      <div className='container'>
        <Navbar/>
        <QuestionDetails
          question={this.props.selectedQuestion}
        />
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
