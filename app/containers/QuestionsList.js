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
import {
  fetchUser
} from '../actions/users';

import './QuestionsList.css';

class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuestionFormStatus: false,
    };

    this.openCloseNewQuestionForm = this.openCloseNewQuestionForm.bind(this);
    this.submitNewQuestion        = this.submitNewQuestion.bind(this);
    this.props.fetchQuestionsBatch();
    this.props.fetchUser();
  }

  openCloseNewQuestionForm() {
    this.setState({
      newQuestionFormStatus: !this.state.newQuestionFormStatus
    })
  }

  submitNewQuestion(question) {
    this.setState({
      newQuestionFormStatus: !this.state.newQuestionFormStatus
    });

    this.props.createQuestion(question);
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

    var newQuestionForm, askButton = null;

    if(this.state.newQuestionFormStatus) {
      newQuestionForm = <NewQuestionForm
        onSubmit={this.submitNewQuestion}
      />;
    }

    if(this.props.user) {
      askButton = <AskQuestionButton
        onClick={this.openCloseNewQuestionForm}
        formStatus={this.state.newQuestionFormStatus}
      />
    }

    return (
      <div className='container'>
        <Navbar
          user={this.props.user}
        />
        <SearchBox/>
        {askButton}
        {newQuestionForm}
        {questionsItems}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  user:      state.users
});

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestionsBatch: () => {
      dispatch(fetchQuestionsBatch());
    },
    createQuestion: (question) => {
      dispatch(createQuestion(question));
    },
    fetchUser: () => {
      dispatch(fetchUser());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsList))
