import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Waypoint           from 'react-waypoint';
import Navbar             from '../components/Navbar';
import SearchBox          from '../components/questions-list/SearchBox';
import QuestionItem       from '../components/questions-list/QuestionItem';
import AskQuestionButton  from '../components/questions-list/AskQuestionButton';
import NewQuestionForm    from '../components/questions-list/NewQuestionForm';
import {
  fetchQuestions,
  fetchQuestionsBatch,
  applySearch,
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
    this.handleWaypointEnter      = this.handleWaypointEnter.bind(this);
    this.onSearch                 = this.onSearch.bind(this);
    this.props.fetchQuestions();
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

  onSearch(text) {
    const searchText = text === '' ? null : text;
    searchText ? this.props.applySearch(searchText) : this.props.fetchQuestions();
  }

  handleWaypointEnter() {
    console.log(this.props.cursor)
    if(this.props.cursor) {
      this.props.fetchQuestionsBatch(this.props.cursor, this.props.searchText);
    }
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
      <div className='container' style={{marginBottom: '200px'}}>
        <Navbar
          user={this.props.user}
        />
        <SearchBox
          onKeyPress={this.onSearch}
        />
        {askButton}
        {newQuestionForm}
        {questionsItems}
        <Waypoint
          onEnter={this.handleWaypointEnter}
          bottomOffset={100}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions:  state.questions.list,
  searchText: state.questions.searchText,
  cursor:     state.questions.cursor,
  user:       state.users
});

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => {
      dispatch(fetchQuestions());
    },
    fetchQuestionsBatch: (cursor, text) => {
      dispatch(fetchQuestionsBatch(cursor, text));
    },
    applySearch: (searchText) => {
      dispatch(applySearch(searchText));
    },
    createQuestion: (question) => {
      dispatch(createQuestion(question));
    },
    fetchUser: () => {
      dispatch(fetchUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
