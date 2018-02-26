import React     from 'react';
import PropTypes from 'prop-types';

const QuestionItem = ({selectedQuestionId, question, onQuestionClick}) => {
  const onClick = e => {
    onQuestionClick(question.id)
  };

  let divClass = 'question-item pure-g';

  if(selectedQuestionId === question.id) {
    divClass = divClass + ' question-item-selected';
  }

  return (
    <div className={divClass} onClick={onClick}>
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
  selectedQuestionId: PropTypes.string.isRequired,
  question:           PropTypes.object.isRequired,
  onQuestionClick:    PropTypes.func.isRequired
};

export default QuestionItem;
