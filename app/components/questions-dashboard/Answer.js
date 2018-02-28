import React     from 'react';
import PropTypes from 'prop-types';

const Answer = ({answer}) => {
  return (
    <div className='question-item'>
      <div>
        <p className='question-desc'>
          {answer.body}
        </p>
      </div>
    </div>
  );
};

export default Answer;
