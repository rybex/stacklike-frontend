import React, {Component} from 'react';
import { connect }        from 'react-redux';
import QuestionDetails    from '../components/questions-dashboard/QuestionDetails';
import QuestionsList      from '../components/questions-dashboard/QuestionsList';
import Navbar             from '../components/Navbar';
import SearchBox          from '../components/questions-dashboard/SearchBox';
import AskQuestionButton  from '../components/questions-dashboard/AskQuestionButton';
import NewQuestionForm    from '../components/questions-dashboard/NewQuestionForm';
import SubmitAnswerForm    from '../components/questions-dashboard/SubmitAnswerForm';
import {
  fetchQuestionsBatch,
  selectQuestion,
  createQuestion,
  createAnswer
} from '../actions/questionsDashboard';

class QuestionsDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestionFormStatus: false,
      newAnswerFormStatus: false
    };

    this.openCloseNewQuestionForm = this.openCloseNewQuestionForm.bind(this);
    this.openCloseNewAnswerForm   = this.openCloseNewAnswerForm.bind(this);
  }

  componentWillMount() {
    this.props.fetchQuestionsBatch();
  }

  openCloseNewQuestionForm() {
    this.setState({
      newQuestionFormStatus: !this.state.newQuestionFormStatus
    })
  }

  openCloseNewAnswerForm() {
    this.setState({
      newAnswerFormStatus: !this.state.newAnswerFormStatus
    })
  }

  render () {
    const result = this.props.selectedQuestion ?
      this.renderQuestionDetails() : this.renderQuestionsList();

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
        <AskQuestionButton
          onClick={this.openCloseNewQuestionForm}
          formStatus={this.state.newQuestionFormStatus}
        />
        <NewQuestionForm
          status={this.state.newQuestionFormStatus}
          onSubmit={this.props.createQuestion}
        />
        <QuestionsList
          questions={this.props.questions}
          selectQuestion={this.props.selectQuestion}
        />
      </div>
    )
  }

  renderQuestionDetails() {
    return (
      <div className='container'>
        <Navbar/>
        <QuestionDetails
          question={this.props.selectedQuestion}
          onAnswerClick={this.openCloseNewAnswerForm}
        />
        <SubmitAnswerForm
          questionId={this.props.selectedQuestion.id}
          status={this.state.newAnswerFormStatus}
          onSubmit={this.props.createAnswer}
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
    },
    createQuestion: (question) => {
      dispatch(createQuestion(question));
    },
    createAnswer: (answer) => {
      dispatch(createAnswer(answer));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDashboard);
