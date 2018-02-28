import React         from 'react';
import PropTypes     from 'prop-types';
import ReactMarkdown from 'react-markdown';

const QuestionBody = ({question}) => {
  return (
    <div className='question-content-body'>
      <ReactMarkdown
        source={question.body}
      />
    </div>
  );
};

QuestionBody.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionBody;
