import React, {Component} from 'react';
import { connect }        from 'react-redux';
import { withRouter }     from 'react-router-dom'
import Navbar             from '../components/Navbar';
import SearchBox          from '../components/questions-list/SearchBox';
import QuestionItem       from '../components/questions-list/QuestionItem';
import AskQuestionButton  from '../components/questions-list/AskQuestionButton';
import NewQuestionForm    from '../components/questions-list/NewQuestionForm';
import {
  fetchQuestionsBatch,
  createQuestion
} from '../actions/questions';

import './QuestionsList.css';

class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestionFormStatus: false,
    };

    this.openCloseNewQuestionForm = this.openCloseNewQuestionForm.bind(this);
    this.props.fetchQuestionsBatch()
  }

  openCloseNewQuestionForm() {
    this.setState({
      newQuestionFormStatus: !this.state.newQuestionFormStatus
    })
  }

  render () {
    const questionsItems = this.props.questions.map((question, index) => {
      return (
        <QuestionItem
          key={index}
          question={question}
        />
      );
    });

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
        {questionsItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestionsBatch: () => {
      dispatch(fetchQuestionsBatch());
    },
    createQuestion: (question) => {
      dispatch(createQuestion(question));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsList))
