import React        from 'react';
import PropTypes    from 'prop-types';
import QuestionItem from './QuestionItem';
import SearchBox    from './SearchBox';

const QuestionsList = ({selectedQuestionId, questions, selectQuestion}) => {
  let questionsItems = questions.map( (question, index) => {
    return (
      <QuestionItem
        key={index}
        selectedQuestionId={selectedQuestionId}
        question={question}
        onQuestionClick={selectQuestion}
      />
    );
  });

  return (
    <div id='list' className='pure-u-1'>
      <SearchBox/>
      {questionsItems}
    </div>
  );
};

QuestionsList.propTypes = {
  selectedQuestionId: PropTypes.string.isRequired,
  questions:          PropTypes.array.isRequired,
  selectQuestion:     PropTypes.func.isRequired
};

export default QuestionsList;
