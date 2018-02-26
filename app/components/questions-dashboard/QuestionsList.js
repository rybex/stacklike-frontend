import React        from 'react';
import PropTypes    from 'prop-types';
import QuestionItem from './QuestionItem';
import SearchBox    from './SearchBox';

const QuestionsList = ({questions}) => {
  let questionsItems = questions.map( (question, index) => {
    return (
      <QuestionItem
        key={index}
        question={question}
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
  questions: PropTypes.array.isRequired
};

export default QuestionsList;
