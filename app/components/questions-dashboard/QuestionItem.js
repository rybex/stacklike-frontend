import React     from 'react';
import PropTypes from 'prop-types';

const QuestionItem = ({question, onQuestionClick}) => {
  const onClick = e => {
    onQuestionClick(question.id)
  };

  return (
    <div className='question-item' onClick={onClick}>
      <div>
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
  question:           PropTypes.object.isRequired,
  onQuestionClick:    PropTypes.func.isRequired
};

export default QuestionItem;
