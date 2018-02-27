import React        from 'react';
import PropTypes    from 'prop-types';
import QuestionItem from './QuestionItem';
import SearchBox    from './SearchBox';

import './QuestionsList.css'

const QuestionsList = ({questions, selectQuestion}) => {
  let questionsItems = questions.map( (question, index) => {
    return (
      <QuestionItem
        key={index}
        question={question}
        onQuestionClick={selectQuestion}
      />
    );
  });

  return (
    <div className='row'>
      {questionsItems}
    </div>
  );
};

QuestionsList.propTypes = {
  questions:          PropTypes.array.isRequired,
  selectQuestion:     PropTypes.func.isRequired
};

export default QuestionsList;
