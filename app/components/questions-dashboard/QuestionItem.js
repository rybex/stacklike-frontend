import React     from 'react';
import PropTypes from 'prop-types';

const QuestionItem = ({question}) => {
  return (
    <div className='question-item question-item-selected pure-g'>
      <div className='pure-u-3-4'>
        <h5 className='question-name'>{question.creator_name}</h5>
        <h4 className='question-subject'>{question.title}</h4>
        <p className='question-desc'>
          {question.body}
        </p>
      </div>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionItem;
