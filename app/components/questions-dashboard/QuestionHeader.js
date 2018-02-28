import React     from 'react';
import PropTypes from 'prop-types';

const QuestionHeader = ({question, onClick}) => {
  return (
    <div className='question-content-header'>
      <div>
        <h1 className='question-content-title'>{question.title}</h1>
        <p className='question-content-subtitle'>
          From <a>{question.creator_name}</a> at <span>{question.created_at}</span>
        </p>
      </div>

      <div className='question-content-controls'>
        <button className='secondary-button' onClick={onClick}>Answer</button>
      </div>
    </div>
  );
};

QuestionHeader.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionHeader;
