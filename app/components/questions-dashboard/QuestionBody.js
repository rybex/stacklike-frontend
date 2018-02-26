import React     from 'react';
import PropTypes from 'prop-types';

const QuestionBody = ({question}) => {
  return (
    <div className='question-content-body'>
      <p>
        {question.body}
      </p>
    </div>
  );
};

QuestionBody.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionBody;
