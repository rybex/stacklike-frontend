import React         from 'react';
import PropTypes     from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Answer = ({answer}) => {
  return (
    <div className='question-item'>
      <ReactMarkdown
        source={answer.body}
      />
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired
};

export default Answer;
