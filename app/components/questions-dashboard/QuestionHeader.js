import React     from 'react';
import PropTypes from 'prop-types';

const QuestionHeader = ({question}) => {
  return (
    <div className='question-content-header pure-g'>
      <div className='pure-u-1-2'>
        <h1 className='question-content-title'>{question.title}</h1>
        <p className='question-content-subtitle'>
          From <a>{question.creator_name}</a> at <span>{question.created_at}</span>
        </p>
      </div>

      <div className='question-content-controls pure-u-1-2'>
        <button className='secondary-button pure-button'>Answer</button>
      </div>
    </div>
  );
};

QuestionHeader.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionHeader;
